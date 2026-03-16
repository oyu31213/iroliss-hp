import { NextRequest, NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      type,
      company,
      department,
      name,
      email,
      phone,
      employees,
      message,
      honeypot,
    } = body as Record<string, string>;

    // ボット対策：隠しフィールドに値が入っていたらスパムとして無視
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!company?.trim() || !name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "必須項目を入力してください" },
        { status: 400 }
      );
    }

    const e = (s: string) => escapeHtml(s);
    const html = `
<!DOCTYPE html>
<html lang="ja">
<body style="font-family:sans-serif;color:#111;max-width:600px;margin:0 auto;padding:24px">
  <h2 style="color:#5B3D8A;border-bottom:2px solid #5B3D8A;padding-bottom:8px">
    お問い合わせ（Shinoby LP）
  </h2>
  <table style="width:100%;border-collapse:collapse;margin-top:16px;font-size:14px">
    <tr>
      <td style="padding:10px 8px;background:#F6F4F9;font-weight:600;width:140px">種別</td>
      <td style="padding:10px 12px">${e(type)}</td>
    </tr>
    <tr>
      <td style="padding:10px 8px;font-weight:600">会社名</td>
      <td style="padding:10px 12px">${e(company)}</td>
    </tr>
    <tr>
      <td style="padding:10px 8px;background:#F6F4F9;font-weight:600">部署名</td>
      <td style="padding:10px 12px">${e(department || "—")}</td>
    </tr>
    <tr>
      <td style="padding:10px 8px;font-weight:600">担当者名</td>
      <td style="padding:10px 12px">${e(name)}</td>
    </tr>
    <tr>
      <td style="padding:10px 8px;background:#F6F4F9;font-weight:600">メールアドレス</td>
      <td style="padding:10px 12px"><a href="mailto:${e(email)}">${e(email)}</a></td>
    </tr>
    <tr>
      <td style="padding:10px 8px;font-weight:600">電話番号</td>
      <td style="padding:10px 12px">${e(phone || "—")}</td>
    </tr>
    <tr>
      <td style="padding:10px 8px;background:#F6F4F9;font-weight:600">従業員規模</td>
      <td style="padding:10px 12px">${e(employees || "—")}</td>
    </tr>
    <tr>
      <td style="padding:10px 8px;font-weight:600;vertical-align:top">ご質問・ご要望</td>
      <td style="padding:10px 12px;white-space:pre-wrap">${e(message || "—")}</td>
    </tr>
  </table>
  <p style="margin-top:24px;font-size:12px;color:#9ca3af">
    このメールは Shinoby LP のお問い合わせフォームから自動送信されました。
  </p>
</body>
</html>`;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY が設定されていません");
      return NextResponse.json(
        { error: "サーバー設定エラーです。管理者にお問い合わせください。" },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Iroliss LP <noreply@iroliss.com>",
        to: "info@iroliss.com",
        reply_to: email,
        subject: `【${type}】${company}・${name}様`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[contact] Resend error:", err);
      return NextResponse.json(
        { error: "メール送信に失敗しました。しばらく後に再度お試しください。" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}
