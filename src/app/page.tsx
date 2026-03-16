"use client";

import { useState } from "react";

type InquiryType =
  | "お問い合わせ"
  | "資料請求"
  | "導入について相談する"
  | "デモを申し込む";

// ─── Logo ────────────────────────────────────────────────────
function Logo() {
  return (
    <span
      className="font-dm-sans text-xl font-bold tracking-tight"
      style={{ color: "var(--ink)" }}
    >
      Iroliss
      <span style={{ color: "var(--purple)" }}>.</span>
      Inc
    </span>
  );
}

// ─── Nav ─────────────────────────────────────────────────────
function Nav({ onOpen }: { onOpen: (type: InquiryType) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: "var(--bg-white)",
        borderColor: "var(--il-border)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            { label: "サービス", href: "#features" },
            { label: "導入の流れ", href: "#flow" },
            { label: "会社概要", href: "#about" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--ink)" }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => onOpen("お問い合わせ")}
            className="rounded-full px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
            style={{ background: "var(--purple)" }}
          >
            お問い合わせ
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6" style={{ background: "var(--ink)" }} />
            <span className="block h-0.5 w-6" style={{ background: "var(--ink)" }} />
            <span className="block h-0.5 w-6" style={{ background: "var(--ink)" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="border-t px-6 pb-4 md:hidden"
          style={{ borderColor: "var(--il-border)" }}
        >
          {[
            { label: "サービス", href: "#features" },
            { label: "導入の流れ", href: "#flow" },
            { label: "会社概要", href: "#about" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium"
              style={{ color: "var(--ink)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="mt-3 inline-block rounded-full px-5 py-2 text-sm font-medium text-white"
            style={{ background: "var(--purple)" }}
            onClick={() => {
              setMenuOpen(false);
              onOpen("お問い合わせ");
            }}
          >
            お問い合わせ
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── Device Mockups ───────────────────────────────────────────
function DeviceMockups() {
  const stats = [
    { icon: "📄", label: "本日受付件数", val: "1件", iconBg: "#EEF2FF", iconColor: "#4F46E5" },
    { icon: "⚠️", label: "不備あり件数", val: "1件", iconBg: "#FEF2F2", iconColor: "#EF4444" },
    { icon: "⏱", label: "処理待ち件数", val: "4件", iconBg: "#FFFBEB", iconColor: "#D97706" },
    { icon: "↗", label: "検証済みパック", val: "1件", iconBg: "#F0FDF4", iconColor: "#16A34A" },
  ];
  const rows = [
    { id: "C2024-001", heir: "田中 一郎", applicant: "田中 花子 (配偶者)", service: "普通預金口座\n(******1234)", status: "不備対応中", statusColor: "#FEE2E2", statusText: "#DC2626", alert: "⚠️", date: "2024-12-20", staff: "山田 太郎" },
    { id: "C2024-002", heir: "佐藤 次郎", applicant: "佐藤 健太 (長男)", service: "投資信託口座\n(******5678)", status: "書類確認中", statusColor: "#FEF9C3", statusText: "#CA8A04", alert: "—", date: "2024-12-22", staff: "鈴木 花子" },
    { id: "C2024-003", heir: "鈴木 三郎", applicant: "鈴木 美咲 (長女)", service: "定期預金口座\n(******9012)", status: "承認待ち", statusColor: "#F3E8FF", statusText: "#9333EA", alert: "—", date: "2024-12-25", staff: "山田 太郎" },
  ];

  // MacBook 16:10 — inner 900×562, viewport 460px wide → scale 0.511, H≈287
  const lInW = 900, lInH = Math.round(900 * 10 / 16);
  const lVpW = 460, lScale = lVpW / lInW, lVpH = Math.round(lInH * lScale);

  // iPhone 9:16 — inner 320×569, viewport 148px wide → scale 0.4625, H≈263
  const pInW = 320, pInH = Math.round(320 * 16 / 9);
  const pVpW = 148, pScale = pVpW / pInW, pVpH = Math.round(pInH * pScale);

  // Container: MacBook left (490px wide), iPhone right overlapping (~165px wide)
  // Total width: ~580px, height: ~380px
  const containerH = lVpH + 10 + 5 + 26 + 20; // screen + bezel_bot + hinge + base + shadow

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 580, height: containerH, margin: "0 auto" }}>

      {/* ════ MacBook Pro 16" — left, flat face-on ════ */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 490,
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4)) drop-shadow(0 4px 10px rgba(0,0,0,0.2))",
        }}
      >
        {/* Lid */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(175deg, #e2e2e2 0%, #d0d0d0 40%, #c4c4c4 100%)",
            borderRadius: "12px 12px 3px 3px",
            padding: "10px 10px 0",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.65), inset 0 -1px 0 rgba(0,0,0,0.1)",
          }}
        >
          {/* top edge highlight */}
          <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 2, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)", pointerEvents: "none" }} />
          {/* webcam dot */}
          <div style={{ position: "absolute", top: 4, left: "50%", transform: "translateX(-50%)", width: 5, height: 5, borderRadius: "50%", background: "#2a2a2a", border: "1px solid #3a3a3a" }} />

          {/* bezel */}
          <div style={{ background: "#111", borderRadius: "6px 6px 0 0", padding: "12px 5px 4px" }}>
            {/* screen */}
            <div style={{ position: "relative", height: lVpH, overflow: "hidden", borderRadius: 3, background: "#f9fafb" }}>
              {/* glare */}
              <div style={{ position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none", background: "linear-gradient(125deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.04) 35%, transparent 60%)" }} />
              {/* inner canvas */}
              <div style={{ width: lInW, height: lInH, transformOrigin: "top left", transform: `scale(${lScale})`, fontFamily: "system-ui,-apple-system,sans-serif" }}>
                {/* header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 28px", background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: "#111" }}>Shinoby</div>
                    <div style={{ fontSize: 12, color: "#9ca3af" }}>解約・名義変更管理システム</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, border: "1px solid #d1d5db", borderRadius: 20, padding: "6px 14px", fontSize: 13, color: "#374151" }}>
                      <span>📱</span><span>遺族向け画面</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#374151" }}>
                      <span style={{ fontSize: 18 }}>👤</span>
                      <div><div style={{ fontSize: 11, color: "#9ca3af" }}>相続対応部</div><div style={{ fontWeight: 500 }}>山田 太郎</div></div>
                    </div>
                  </div>
                </div>
                {/* body */}
                <div style={{ padding: "22px 28px", background: "#f9fafb" }}>
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "#111", marginBottom: 3 }}>解約手続き管理</div>
                    <div style={{ fontSize: 13, color: "#9ca3af" }}>死亡に伴う解約・名義変更案件の一覧</div>
                  </div>
                  {/* stats */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 11, marginBottom: 18 }}>
                    {stats.map((s) => (
                      <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 11, background: "#fff", border: "1px solid #f0f0f0", borderRadius: 12, padding: "13px 15px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: s.iconBg, fontSize: 17 }}>{s.icon}</div>
                        <div><div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 2 }}>{s.label}</div><div style={{ fontSize: 22, fontWeight: 700, color: "#111" }}>{s.val}</div></div>
                      </div>
                    ))}
                  </div>
                  {/* tabs */}
                  <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                    <div style={{ padding: "8px 20px", borderRadius: 20, border: "1px solid #e5e7eb", background: "#fff", fontSize: 14, color: "#374151" }}>新規申請</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 20px", borderRadius: 20, background: "#111", fontSize: 14, color: "#fff" }}>
                      検証済みパック
                      <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#22c55e", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>1</span>
                    </div>
                  </div>
                  {/* filter */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "9px 16px", marginBottom: 14 }}>
                    <span style={{ fontSize: 14, color: "#374151" }}>ステータス：</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, border: "1px solid #d1d5db", borderRadius: 8, padding: "4px 10px", fontSize: 14, color: "#374151" }}>すべて <span>▾</span></div>
                    <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, color: "#374151" }}>
                      <div style={{ width: 13, height: 13, borderRadius: 3, background: "#374151" }} />不備ありのみ表示
                    </div>
                  </div>
                  {/* table */}
                  <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "125px 95px 148px 138px 108px 55px 108px 88px 55px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb", padding: "9px 16px", fontSize: 12, fontWeight: 600, color: "#6b7280" }}>
                      {["申請ID", "被相続人\n氏名", "申請者（続柄）", "対象サービス", "ステータス", "不備", "受付日", "担当者", "操作"].map((h) => (
                        <div key={h} style={{ whiteSpace: "pre-wrap", lineHeight: 1.3 }}>{h}</div>
                      ))}
                    </div>
                    {rows.map((row, i) => (
                      <div key={row.id} style={{ display: "grid", gridTemplateColumns: "125px 95px 148px 138px 108px 55px 108px 88px 55px", alignItems: "center", borderBottom: i < rows.length - 1 ? "1px solid #f3f4f6" : undefined, padding: "13px 16px", fontSize: 13, color: "#111" }}>
                        <div style={{ color: "#4b5563", fontWeight: 500 }}>{row.id}</div>
                        <div>{row.heir}</div>
                        <div>{row.applicant}</div>
                        <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.4, fontSize: 12 }}>{row.service}</div>
                        <div><span style={{ padding: "3px 10px", borderRadius: 20, background: row.statusColor, color: row.statusText, fontSize: 11, fontWeight: 500 }}>{row.status}</span></div>
                        <div style={{ fontSize: 15, color: row.alert !== "—" ? "#EF4444" : "#d1d5db" }}>{row.alert}</div>
                        <div style={{ color: "#6b7280", fontSize: 12 }}>{row.date}</div>
                        <div style={{ fontSize: 13 }}>{row.staff}</div>
                        <div><span style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: "3px 9px", fontSize: 11, color: "#374151" }}>詳細</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* lid shine */}
          <div style={{ position: "absolute", inset: 0, borderRadius: "12px 12px 3px 3px", background: "linear-gradient(130deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.08) 25%, transparent 55%)", pointerEvents: "none" }} />
        </div>
        {/* hinge */}
        <div style={{ height: 5, background: "linear-gradient(to bottom, #888, #aaa)", margin: "0 2px" }} />
        {/* base */}
        <div style={{ position: "relative", background: "linear-gradient(180deg, #d4d4d4 0%, #c2c2c2 100%)", borderRadius: "2px 2px 10px 10px", height: 26, overflow: "hidden" }}>
          <div style={{ position: "absolute", bottom: 4, left: "50%", transform: "translateX(-50%)", width: 80, height: 12, background: "rgba(0,0,0,0.07)", borderRadius: 3, border: "1px solid rgba(0,0,0,0.06)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 50%)", pointerEvents: "none" }} />
        </div>
      </div>

      {/* ════ iPhone — right, overlapping MacBook right edge ════ */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 18,
          width: 162,
          zIndex: 20,
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
        }}
      >
        {/* titanium frame */}
        <div
          style={{
            background: "linear-gradient(155deg, #505050 0%, #2c2c2c 40%, #1a1a1a 70%, #262626 100%)",
            borderRadius: 36,
            padding: "3px",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.35)",
            position: "relative",
          }}
        >
          {/* screen glass */}
          <div style={{ background: "#0a0a0a", borderRadius: 34, overflow: "hidden" }}>
            {/* status bar */}
            <div style={{ height: 20, background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px 0 14px" }}>
              <span style={{ fontSize: 8, fontWeight: 600, color: "#111" }}>9:41</span>
              <div style={{ display: "flex", gap: 3, alignItems: "center", fontSize: 7, color: "#111" }}>
                <span>●●●●</span><span>WiFi</span><span>🔋</span>
              </div>
            </div>
            {/* Dynamic Island */}
            <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 52, height: 13, background: "#000", borderRadius: 8, zIndex: 30 }} />
            {/* chat screen */}
            <div style={{ position: "relative", background: "#fff", height: pVpH, overflow: "hidden" }}>
              {/* glare */}
              <div style={{ position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none", background: "linear-gradient(128deg, rgba(255,255,255,0.1) 0%, transparent 50%)" }} />
              {/* inner canvas */}
              <div style={{ width: pInW, height: pInH, transformOrigin: "top left", transform: `scale(${pScale})`, background: "#fff", fontFamily: "system-ui,-apple-system,sans-serif" }}>
                {/* chat header */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 14px 10px", borderBottom: "1px solid #f0f0f0" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: "#5B3D8A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>S</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>Shinoby AIアシスタント</div>
                    <div style={{ fontSize: 11, color: "#9ca3af" }}>お手続きをサポートします</div>
                  </div>
                </div>
                {/* messages */}
                <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: 11 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#5B3D8A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", fontSize: 12 }}>A</span>
                    </div>
                    <div style={{ background: "#5B3D8A", borderRadius: "0 14px 14px 14px", padding: "10px 12px", fontSize: 13, color: "#fff", lineHeight: 1.5, maxWidth: "82%" }}>
                      こんにちは。Shinobyです。この度はご悲傷様でございます。お手続きをサポートします。
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#5B3D8A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", fontSize: 12 }}>A</span>
                    </div>
                    <div style={{ background: "#5B3D8A", borderRadius: "0 14px 14px 14px", padding: "10px 12px", fontSize: 13, color: "#fff", lineHeight: 1.5, maxWidth: "82%" }}>
                      まず、お亡くなりになられた方について教えてください。
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingLeft: 34 }}>
                    {["父", "母", "配偶者", "その他の家族"].map((opt) => (
                      <div key={opt} style={{ border: "1.5px solid #5B3D8A", borderRadius: 20, padding: "5px 14px", fontSize: 12, color: "#5B3D8A" }}>{opt}</div>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ background: "#5B3D8A", borderRadius: "14px 0 14px 14px", padding: "10px 16px", fontSize: 13, color: "#fff" }}>父</div>
                  </div>
                </div>
                {/* input */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderTop: "1px solid #f0f0f0" }}>
                  <div style={{ flex: 1, background: "#f3f4f6", borderRadius: 22, padding: "8px 14px", fontSize: 12, color: "#9ca3af" }}>メッセージを入力...</div>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#5B3D8A", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, flexShrink: 0 }}>↑</div>
                </div>
              </div>
            </div>
            {/* home bar */}
            <div style={{ height: 18, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 40, height: 4, borderRadius: 2, background: "#111" }} />
            </div>
          </div>
          {/* frame shine */}
          <div style={{ position: "absolute", inset: 0, borderRadius: 36, background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 40%)", pointerEvents: "none" }} />
        </div>
      </div>

    </div>
  );
}

// ─── Contact Modal ─────────────────────────────────────────────
const INQUIRY_TYPES: InquiryType[] = [
  "お問い合わせ",
  "資料請求",
  "導入について相談する",
  "デモを申し込む",
];

const EMPLOYEE_OPTIONS = [
  "〜50名",
  "51〜200名",
  "201〜500名",
  "501〜1,000名",
  "1,001名以上",
];

function ContactModal({
  initialType,
  onClose,
}: {
  initialType: InquiryType;
  onClose: () => void;
}) {
  const [type, setType] = useState<InquiryType>(initialType);
  const [company, setCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [employees, setEmployees] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, company, department, name, email, phone, employees, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "送信に失敗しました");
      } else {
        setDone(true);
      }
    } catch {
      setError("ネットワークエラーが発生しました。再度お試しください。");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100";
  const inputStyle = { borderColor: "var(--il-border)", color: "var(--ink)" };

  return (
    /* overlay */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-8 shadow-2xl"
        style={{ background: "var(--bg-white)" }}
      >
        {/* close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-lg transition hover:opacity-70"
          style={{ color: "var(--ink-sub)", background: "var(--bg)" }}
          aria-label="閉じる"
        >
          ✕
        </button>

        {done ? (
          /* ── 送信完了 ── */
          <div className="py-8 text-center">
            <div
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-3xl"
              style={{ background: "var(--purple-light)" }}
            >
              ✓
            </div>
            <h3 className="mb-2 text-xl font-bold" style={{ color: "var(--ink)" }}>
              送信が完了しました
            </h3>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--ink-sub)" }}>
              お問い合わせありがとうございます。
              <br />
              内容を確認の上、担当者よりご連絡いたします。
            </p>
            <button
              onClick={onClose}
              className="rounded-full px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
              style={{ background: "var(--purple)" }}
            >
              閉じる
            </button>
          </div>
        ) : (
          /* ── フォーム ── */
          <>
            <div className="mb-6">
              <span
                className="mb-2 inline-block rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: "var(--purple-light)", color: "var(--purple)" }}
              >
                Contact
              </span>
              <h2 className="text-xl font-bold" style={{ color: "var(--ink)" }}>
                お問い合わせ
              </h2>
              <p className="mt-1 text-sm" style={{ color: "var(--ink-sub)" }}>
                貴社の課題に合わせてご提案します。お気軽にどうぞ。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 種別 */}
              <div>
                <label className="mb-1 block text-xs font-semibold" style={{ color: "var(--ink-sub)" }}>
                  お問い合わせ種別<span className="ml-1 text-red-500">*</span>
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as InquiryType)}
                  className={inputClass}
                  style={inputStyle}
                  required
                >
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* 会社名 */}
              <div>
                <label className="mb-1 block text-xs font-semibold" style={{ color: "var(--ink-sub)" }}>
                  会社名<span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="株式会社〇〇銀行"
                  className={inputClass}
                  style={inputStyle}
                  required
                />
              </div>

              {/* 部署名 */}
              <div>
                <label className="mb-1 block text-xs font-semibold" style={{ color: "var(--ink-sub)" }}>
                  部署名
                </label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="相続対応部"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              {/* 担当者名 */}
              <div>
                <label className="mb-1 block text-xs font-semibold" style={{ color: "var(--ink-sub)" }}>
                  担当者名<span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="山田 太郎"
                  className={inputClass}
                  style={inputStyle}
                  required
                />
              </div>

              {/* メール・電話 */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold" style={{ color: "var(--ink-sub)" }}>
                    メールアドレス<span className="ml-1 text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yamada@example.com"
                    className={inputClass}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold" style={{ color: "var(--ink-sub)" }}>
                    電話番号
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="03-0000-0000"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* 従業員規模 */}
              <div>
                <label className="mb-1 block text-xs font-semibold" style={{ color: "var(--ink-sub)" }}>
                  従業員規模
                </label>
                <select
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className={inputClass}
                  style={inputStyle}
                >
                  <option value="">選択してください</option>
                  {EMPLOYEE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* メッセージ */}
              <div>
                <label className="mb-1 block text-xs font-semibold" style={{ color: "var(--ink-sub)" }}>
                  ご質問・ご要望
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="現在の手続きフローや課題について、ご自由にお書きください。"
                  className={inputClass}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              {/* エラー */}
              {error && (
                <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50"
                style={{ background: "var(--purple)" }}
              >
                {loading ? "送信中..." : "送信する"}
              </button>

              <p className="text-center text-xs" style={{ color: "var(--ink-sub)" }}>
                送信後、info@iroliss.com より返信いたします。
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────
function Hero({ onOpen }: { onOpen: (type: InquiryType) => void }) {
  return (
    <section className="px-6 py-20 md:py-28" style={{ background: "var(--purple)" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left: copy */}
        <div>
          <div
            className="mb-4 inline-block rounded-full px-4 py-1 text-sm font-medium"
            style={{ background: "rgba(255,255,255,0.15)", color: "#D4B8FF" }}
          >
            相続・解約手続き SaaS
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            差し戻し、ゼロへ。
            <br />
            手続きを、<span style={{ color: "#D4B8FF" }}>5分</span>で
            <br />
            完結させます。
          </h1>
          <p className="mb-8 text-base leading-relaxed" style={{ color: "#C4B0E8" }}>
            書類不備・来店対応・繰り返しの確認連絡。
            <br />
            遺族対応の非効率を、構造から解決します。
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpen("資料請求")}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: "var(--purple)" }}
            >
              資料請求
            </button>
            <button
              onClick={() => onOpen("デモを申し込む")}
              className="rounded-full border-2 border-white px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              デモを申し込む
            </button>
          </div>
        </div>

        {/* Right: device mockups */}
        <div className="hidden md:block">
          <DeviceMockups />
        </div>
      </div>
    </section>
  );
}

// ─── Target Band ──────────────────────────────────────────────
function TargetBand() {
  const tags = [
    "銀行・信用金庫", "生命保険", "証券会社", "携帯・通信",
    "電力・ガス", "クレジットカード", "不動産管理",
  ];

  return (
    <section
      className="border-b px-6 py-5"
      style={{ background: "var(--bg-white)", borderColor: "var(--il-border)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2">
        <span className="text-sm font-medium" style={{ color: "var(--ink-sub)" }}>
          対象業界
        </span>
        <div className="hidden h-5 w-px sm:block" style={{ background: "var(--il-border)" }} />
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border px-3 py-1 text-sm"
            style={{ borderColor: "var(--il-border)", color: "var(--ink-sub)" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── Pilot Banner ─────────────────────────────────────────────
function PilotBanner({ onOpen }: { onOpen: (type: InquiryType) => void }) {
  return (
    <section className="px-6 py-8" style={{ background: "var(--green-light)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div
            className="mb-1 text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--green)" }}
          >
            Pilot Program
          </div>
          <h3 className="text-lg font-bold" style={{ color: "var(--ink)" }}>
            初期導入パートナー企業を募集しています
          </h3>
          <p className="mt-1 text-sm" style={{ color: "var(--ink-sub)" }}>
            プロダクト開発に参加いただける企業様に、特別条件でご導入いただけます。
            まずはオンラインで30分、現状の課題をお聞かせください。
          </p>
        </div>
        <button
          onClick={() => onOpen("導入について相談する")}
          className="shrink-0 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
          style={{ background: "var(--green)" }}
        >
          導入について相談する →
        </button>
      </div>
    </section>
  );
}

// ─── Pain ─────────────────────────────────────────────────────
function Pain() {
  const cards = [
    { icon: "📄", title: "書類不備による差し戻し", desc: "何度も差し戻しが発生し、遺族・担当者ともに疲弊する。" },
    { icon: "🏦", title: "来店対応の属人化", desc: "複数名が関与し、フローが担当者によってバラバラになる。" },
    { icon: "📞", title: "遺族への繰り返し連絡", desc: "情報不足のたびに電話・郵送で確認が必要になる。" },
    { icon: "🗂️", title: "デジタル化の遅れ", desc: "紙・FAX・来店前提の設計で、オンライン対応が困難。" },
  ];

  return (
    <section id="pain" className="px-6 py-20" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
            style={{ background: "var(--purple-light)", color: "var(--purple)" }}
          >
            課題
          </span>
          <h2 className="text-3xl font-bold md:text-4xl" style={{ color: "var(--ink)" }}>
            死亡手続きには、構造的な非効率があります
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--ink-sub)" }}>
            金融・通信・公共サービス各社が、同じ課題をそれぞれ抱えています。
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-6"
              style={{ background: "var(--bg-white)", border: "1px solid var(--il-border)" }}
            >
              <div className="mb-3 text-3xl">{card.icon}</div>
              <h3 className="mb-2 text-base font-bold" style={{ color: "var(--ink)" }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-sub)" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────
function Features() {
  const cards = [
    { tag: "INTAKE", title: "書類チェック・事前確認", desc: "遺族が提出前に必要書類を確認・アップロード。不備ゼロの状態で届けます。" },
    { tag: "AUTOMATION", title: "手続き案内の自動化", desc: "死亡連絡を受け付けた瞬間から遺族への案内を自動送付。担当者対応をゼロに近づけます。" },
    { tag: "SPEED", title: "5分完了の受付フロー", desc: "情報が揃った申請だけを受け付けるため、処理時間を大幅短縮。" },
    { tag: "SECURITY", title: "本人確認・セキュリティ", desc: "相続に必要な本人確認・書類の真正性確認を安全なフローで実現。" },
    { tag: "INSIGHT", title: "管理ダッシュボード", desc: "進捗・ステータスを一元管理。差し戻し件数・完了率などをリアルタイムで可視化。" },
  ];

  return (
    <section id="features" className="px-6 py-20" style={{ background: "var(--bg-white)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
            style={{ background: "var(--purple-light)", color: "var(--purple)" }}
          >
            サービス
          </span>
          <h2 className="text-3xl font-bold md:text-4xl" style={{ color: "var(--ink)" }}>
            わたしたちが提供する機能
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--ink-sub)" }}>
            遺族側の体験からデジタル化することで、企業の受付を効率化します。
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.tag}
              className="rounded-2xl p-6"
              style={{ background: "var(--bg)", border: "1px solid var(--il-border)" }}
            >
              <div
                className="mb-3 inline-block rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wider"
                style={{ background: "var(--purple-light)", color: "var(--purple)" }}
              >
                {card.tag}
              </div>
              <h3 className="mb-2 text-base font-bold" style={{ color: "var(--ink)" }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-sub)" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Flow ─────────────────────────────────────────────────────
function Flow() {
  const steps = [
    { no: "01", title: "ヒアリング", desc: "現在の手続きフローと課題をお聞きします" },
    { no: "02", title: "設計・カスタマイズ", desc: "貴社の書類要件に合わせて設定します" },
    { no: "03", title: "パイロット導入", desc: "小規模からテスト運用を開始します" },
    { no: "04", title: "本番稼働", desc: "全件切り替えで工数削減を実現します" },
  ];

  return (
    <section id="flow" className="px-6 py-20" style={{ background: "var(--purple)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
            style={{ background: "rgba(255,255,255,0.15)", color: "#D4B8FF" }}
          >
            導入の流れ
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            4ステップで始められます
          </h2>
          <p className="mt-4 text-base" style={{ color: "#C4B0E8" }}>
            既存の受付フローを変えることなく、段階的に導入できます。
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.no}
              className="p-8"
              style={{
                background: "rgba(255,255,255,0.07)",
                borderRight: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.15)" : undefined,
              }}
            >
              <div className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4B8FF" }}>
                Step {step.no}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#C4B0E8" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="px-6 py-20" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
            style={{ background: "var(--purple-light)", color: "var(--purple)" }}
          >
            会社概要
          </span>
          <h2 className="text-3xl font-bold md:text-4xl" style={{ color: "var(--ink)" }}>
            株式会社イロリス
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Mission card — full width */}
          <div className="col-span-full rounded-2xl p-8" style={{ background: "var(--purple)" }}>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4B8FF" }}>
              Mission
            </div>
            <p className="text-xl font-bold leading-relaxed text-white md:text-2xl">
              「大切な人を亡くした後」の手続きを、
              <br className="hidden sm:block" />
              誰もが迷わず進められる社会へ。
            </p>
            <p className="mt-3 text-sm" style={{ color: "#C4B0E8" }}>
              悲しみの中にある遺族が、書類や手続きに追われない世界をつくります。
            </p>
          </div>

          {/* Business card */}
          <div
            className="rounded-2xl p-6"
            style={{ background: "var(--bg-white)", border: "1px solid var(--il-border)" }}
          >
            <div className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--ink-sub)" }}>
              事業内容
            </div>
            <p className="text-base font-medium" style={{ color: "var(--ink)" }}>
              相続・解約手続き支援SaaSの開発・提供
            </p>
          </div>

          {/* Contact card */}
          <div
            className="rounded-2xl p-6"
            style={{ background: "var(--bg-white)", border: "1px solid var(--il-border)" }}
          >
            <div className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--ink-sub)" }}>
              お問い合わせ
            </div>
            <a
              href="mailto:info@iroliss.com"
              className="text-base font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--purple)" }}
            >
              info@iroliss.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────
function Contact({ onOpen }: { onOpen: (type: InquiryType) => void }) {
  return (
    <section id="contact" className="px-6 py-20" style={{ background: "var(--bg-white)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
            style={{ background: "var(--purple-light)", color: "var(--purple)" }}
          >
            お問い合わせ
          </span>
          <h2 className="text-3xl font-bold md:text-4xl" style={{ color: "var(--ink)" }}>
            導入のご検討・資料請求
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--ink-sub)" }}>
            手続き工数の削減について、具体的にご説明します。
          </p>
        </div>

        {/* CTA card */}
        <div
          className="mx-auto max-w-2xl rounded-2xl p-10 text-center"
          style={{ background: "var(--purple)" }}
        >
          <h3 className="mb-2 text-xl font-bold text-white">
            資料請求・デモのご案内
          </h3>
          <p className="mb-8 text-sm" style={{ color: "#C4B0E8" }}>
            まずはお気軽にご連絡ください。貴社の課題に合わせてご提案します。
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => onOpen("資料請求")}
              className="rounded-full bg-white px-8 py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: "var(--purple)" }}
            >
              資料請求
            </button>
            <button
              onClick={() => onOpen("デモを申し込む")}
              className="rounded-full border-2 border-white px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              デモを申し込む
            </button>
          </div>
          <p className="mt-6 text-xs" style={{ color: "#C4B0E8" }}>
            info@iroliss.com
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="border-t px-6 py-8"
      style={{ background: "var(--bg)", borderColor: "var(--il-border)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-sm sm:flex-row sm:justify-between">
        <Logo />
        <div className="flex gap-6">
          <a href="mailto:info@iroliss.com" className="transition-opacity hover:opacity-70" style={{ color: "var(--ink-sub)" }}>
            採用情報
          </a>
          <a href="mailto:info@iroliss.com" className="transition-opacity hover:opacity-70" style={{ color: "var(--ink-sub)" }}>
            プライバシーポリシー
          </a>
        </div>
        <p style={{ color: "var(--ink-sub)" }}>
          © 2026 株式会社イロリス. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────
export default function Page() {
  const [modalType, setModalType] = useState<InquiryType | null>(null);

  function openModal(type: InquiryType) {
    setModalType(type);
  }

  function closeModal() {
    setModalType(null);
  }

  return (
    <main className="font-noto" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <Nav onOpen={openModal} />
      <Hero onOpen={openModal} />
      <TargetBand />
      <PilotBanner onOpen={openModal} />
      <Pain />
      <Features />
      <Flow />
      <About />
      <Contact onOpen={openModal} />
      <Footer />

      {modalType && (
        <ContactModal initialType={modalType} onClose={closeModal} />
      )}
    </main>
  );
}
