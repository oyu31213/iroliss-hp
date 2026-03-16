"use client";

import { useState } from "react";

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
function Nav() {
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
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
            style={{ background: "var(--purple)" }}
          >
            お問い合わせ
          </a>
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
          <a
            href="#contact"
            className="mt-3 inline-block rounded-full px-5 py-2 text-sm font-medium text-white"
            style={{ background: "var(--purple)" }}
            onClick={() => setMenuOpen(false)}
          >
            お問い合わせ
          </a>
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

  // MacBook: inner canvas 900×562 (16:10), rendered at scale into 476px screen
  const LW = 900, LH = Math.round(900 * 10 / 16); // 562
  const LS = 476 / LW; // ~0.529 → screen H ≈ 297

  // iPhone: inner canvas 320×568 (9:16), rendered at scale into 128px screen
  const PW = 320, PH = Math.round(320 * 16 / 9); // 569
  const PS = 128 / PW; // 0.4 → screen H ≈ 228

  return (
    /* Outer wrapper — phone sticks out left, laptop fills right */
    <div style={{ position: "relative", width: "100%", maxWidth: 600, height: 430, margin: "0 auto" }}>

      {/* ════ MacBook Pro 16" ════ */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 516,
          filter: "drop-shadow(0 28px 56px rgba(0,0,0,0.45)) drop-shadow(0 8px 16px rgba(0,0,0,0.2))",
          transform: "perspective(2400px) rotateX(3deg) rotateY(-5deg)",
        }}
      >
        {/* ── Lid ── */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(160deg, #dedede 0%, #cccccc 30%, #c2c2c2 65%, #b4b4b4 100%)",
            borderRadius: "14px 14px 3px 3px",
            padding: "11px 11px 0",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(0,0,0,0.12), inset 1px 0 0 rgba(255,255,255,0.3), inset -1px 0 0 rgba(0,0,0,0.1)",
          }}
        >
          {/* lid highlight band across top edge */}
          <div style={{ position: "absolute", top: 0, left: "8%", right: "8%", height: 2, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)", borderRadius: 2, pointerEvents: "none" }} />
          {/* webcam strip */}
          <div style={{ position: "absolute", top: 4, left: "50%", transform: "translateX(-50%)", width: 56, height: 5, borderRadius: 3, background: "#1c1c1c", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#282828", border: "1px solid #383838" }} />
          </div>

          {/* black bezel */}
          <div
            style={{
              background: "#0e0e0e",
              borderRadius: "7px 7px 0 0",
              padding: "14px 5px 5px",
            }}
          >
            {/* screen viewport */}
            <div style={{ position: "relative", height: Math.round(LH * LS), overflow: "hidden", borderRadius: 3 }}>
              {/* glare overlay */}
              <div style={{ position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none", borderRadius: 3, background: "linear-gradient(128deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 35%, transparent 65%)" }} />
              {/* inner canvas — full resolution UI */}
              <div style={{ width: LW, height: LH, transformOrigin: "top left", transform: `scale(${LS})`, background: "#f9fafb", fontFamily: "system-ui,-apple-system,sans-serif" }}>
                {/* app header */}
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
                {/* page body */}
                <div style={{ padding: "22px 28px" }}>
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
                  <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
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

          {/* lid surface shine */}
          <div style={{ position: "absolute", inset: 0, borderRadius: "14px 14px 3px 3px", background: "linear-gradient(130deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.1) 22%, transparent 55%)", pointerEvents: "none" }} />
        </div>

        {/* ── Hinge ── */}
        <div style={{ height: 5, background: "linear-gradient(to bottom, #888, #aaa, #999)", margin: "0 3px", boxShadow: "0 1px 3px rgba(0,0,0,0.25)" }} />

        {/* ── Base / keyboard deck ── */}
        <div style={{ position: "relative", background: "linear-gradient(178deg, #d2d2d2 0%, #c6c6c6 40%, #bababa 100%)", borderRadius: "2px 2px 11px 11px", height: 28, overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)" }}>
          {/* keyboard hint — horizontal key rows */}
          <div style={{ position: "absolute", top: 4, left: "8%", right: "8%", display: "flex", flexDirection: "column", gap: 2 }}>
            {[0.85, 1, 0.9].map((w, i) => (
              <div key={i} style={{ height: 3, background: `repeating-linear-gradient(90deg, rgba(0,0,0,0.09) 0px, rgba(0,0,0,0.09) ${w * 13}px, transparent ${w * 13}px, transparent ${w * 13 + 3}px)`, borderRadius: 1, width: `${w * 100}%`, margin: "0 auto" }} />
            ))}
          </div>
          {/* trackpad */}
          <div style={{ position: "absolute", bottom: 4, left: "50%", transform: "translateX(-50%)", width: 86, height: 13, background: "rgba(0,0,0,0.07)", borderRadius: 4, border: "1px solid rgba(0,0,0,0.07)" }} />
          {/* base shine */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, transparent 55%)", pointerEvents: "none" }} />
        </div>

        {/* cast shadow beneath device */}
        <div style={{ height: 10, background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(0,0,0,0.22) 0%, transparent 100%)", marginTop: 2 }} />
      </div>

      {/* ════ iPhone 16 Pro ════ */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 52,
          width: 150,
          zIndex: 20,
          filter: "drop-shadow(-6px 24px 40px rgba(0,0,0,0.55)) drop-shadow(4px 8px 16px rgba(0,0,0,0.25))",
          transform: "perspective(1600px) rotateX(2deg) rotateY(9deg)",
        }}
      >
        {/* titanium frame ring — outer edge */}
        <div
          style={{
            background: "linear-gradient(155deg, #585858 0%, #2e2e2e 35%, #1a1a1a 65%, #2a2a2a 100%)",
            borderRadius: 38,
            padding: 3,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.4), inset 1px 0 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* inner glass surface */}
          <div style={{ background: "#0a0a0a", borderRadius: 36, overflow: "hidden", position: "relative" }}>
            {/* status bar */}
            <div style={{ height: 14, background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", paddingTop: 6 }}>
              <span style={{ fontSize: 7, fontWeight: 600, color: "#111" }}>9:41</span>
              <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                <span style={{ fontSize: 6 }}>▂▄▆</span>
                <span style={{ fontSize: 6 }}>WiFi</span>
                <span style={{ fontSize: 6 }}>🔋</span>
              </div>
            </div>

            {/* Dynamic Island */}
            <div style={{ position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)", width: 54, height: 14, background: "#000", borderRadius: 9, zIndex: 30 }} />

            {/* screen area */}
            <div style={{ position: "relative", background: "#fff", height: Math.round(PH * PS) }}>
              {/* glare */}
              <div style={{ position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none", background: "linear-gradient(130deg, rgba(255,255,255,0.12) 0%, transparent 50%)" }} />
              {/* inner chat canvas */}
              <div style={{ width: PW, height: PH, transformOrigin: "top left", transform: `scale(${PS})`, background: "#fff", fontFamily: "system-ui,-apple-system,sans-serif" }}>
                {/* chat app header */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px 14px 12px", borderBottom: "1px solid #f0f0f0" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: "#5B3D8A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>S</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>Shinoby AIアシスタント</div>
                    <div style={{ fontSize: 11, color: "#9ca3af" }}>お手続きをサポートします</div>
                  </div>
                </div>
                {/* chat messages */}
                <div style={{ padding: "14px 12px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {/* ai */}
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#5B3D8A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", fontSize: 12 }}>A</span>
                    </div>
                    <div style={{ background: "#5B3D8A", borderRadius: "0 14px 14px 14px", padding: "10px 14px", fontSize: 13, color: "#fff", lineHeight: 1.5, maxWidth: "82%" }}>
                      こんにちは。Shinobyです。この度はご悲傷様でございます。お手続きのお手伝いをさせていただきます。
                    </div>
                  </div>
                  {/* ai */}
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#5B3D8A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", fontSize: 12 }}>A</span>
                    </div>
                    <div style={{ background: "#5B3D8A", borderRadius: "0 14px 14px 14px", padding: "10px 14px", fontSize: 13, color: "#fff", lineHeight: 1.5, maxWidth: "82%" }}>
                      まず、お亡くなりになられた方について教えてください。
                    </div>
                  </div>
                  {/* choice buttons */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingLeft: 34 }}>
                    {["父", "母", "配偶者", "その他の家族"].map((opt) => (
                      <div key={opt} style={{ border: "1.5px solid #5B3D8A", borderRadius: 20, padding: "5px 14px", fontSize: 12, color: "#5B3D8A" }}>{opt}</div>
                    ))}
                  </div>
                  {/* user */}
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ background: "#5B3D8A", borderRadius: "14px 0 14px 14px", padding: "10px 16px", fontSize: 13, color: "#fff" }}>父</div>
                  </div>
                </div>
                {/* input bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderTop: "1px solid #f0f0f0" }}>
                  <div style={{ flex: 1, background: "#f3f4f6", borderRadius: 22, padding: "8px 14px", fontSize: 12, color: "#9ca3af" }}>メッセージを入力...</div>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#5B3D8A", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, flexShrink: 0 }}>↑</div>
                </div>
              </div>
            </div>

            {/* home indicator */}
            <div style={{ height: 20, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 44, height: 4, borderRadius: 2, background: "#111" }} />
            </div>
          </div>

          {/* frame shine */}
          <div style={{ position: "absolute", inset: 0, borderRadius: 38, background: "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 40%)", pointerEvents: "none" }} />
        </div>

        {/* cast shadow */}
        <div style={{ height: 10, background: "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(0,0,0,0.3) 0%, transparent 100%)", marginTop: 2 }} />
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────
function Hero() {
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
            <a
              href="mailto:info@iroliss.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: "var(--purple)" }}
            >
              資料請求
            </a>
            <a
              href="mailto:demo@iroliss.com"
              className="rounded-full border-2 border-white px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              デモを申し込む
            </a>
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
function PilotBanner() {
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
        <a
          href="mailto:info@iroliss.com"
          className="shrink-0 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
          style={{ background: "var(--green)" }}
        >
          導入について相談する →
        </a>
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
function Contact() {
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
            <a
              href="mailto:info@iroliss.com"
              className="rounded-full bg-white px-8 py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: "var(--purple)" }}
            >
              資料請求
            </a>
            <a
              href="mailto:demo@iroliss.com"
              className="rounded-full border-2 border-white px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              デモを申し込む
            </a>
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
  return (
    <main className="font-noto" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <Nav />
      <Hero />
      <TargetBand />
      <PilotBanner />
      <Pain />
      <Features />
      <Flow />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
