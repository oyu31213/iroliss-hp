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
    { icon: "⚠", label: "不備あり件数", val: "1件", iconBg: "#FEF2F2", iconColor: "#EF4444" },
    { icon: "⏱", label: "処理待ち件数", val: "4件", iconBg: "#FFFBEB", iconColor: "#D97706" },
    { icon: "↗", label: "検証済みパック", val: "1件", iconBg: "#F0FDF4", iconColor: "#16A34A" },
  ];
  const rows = [
    { id: "C2024-001", heir: "田中 一郎", applicant: "田中 花子 (配偶者)", service: "普通預金口座\n(******1234)", status: "不備対応中", statusColor: "#FEE2E2", statusText: "#DC2626", hasAlert: true, date: "2024-12-20", staff: "山田 太郎" },
    { id: "C2024-002", heir: "佐藤 次郎", applicant: "佐藤 健太 (長男)", service: "投資信託口座\n(******5678)", status: "書類確認中", statusColor: "#FEF9C3", statusText: "#CA8A04", hasAlert: false, date: "2024-12-22", staff: "鈴木 花子" },
    { id: "C2024-003", heir: "鈴木 三郎", applicant: "鈴木 美咲 (長女)", service: "定期預金口座", status: "承認待ち", statusColor: "#F3E8FF", statusText: "#9333EA", hasAlert: false, date: "2024-12-25", staff: "山田 太郎" },
  ];

  return (
    <div className="relative flex justify-center">
      {/* ── Laptop ── */}
      <div className="relative" style={{ maxWidth: 520, width: "100%" }}>
        {/* Lid */}
        <div
          className="overflow-hidden rounded-t-2xl"
          style={{
            background: "linear-gradient(145deg, #e8e8e8, #d0d0d0)",
            padding: "10px 10px 0",
            boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
          }}
        >
          {/* Bezel */}
          <div
            className="overflow-hidden rounded-t-lg"
            style={{ background: "#111", padding: "5px 5px 0" }}
          >
            {/* Screen */}
            <div style={{ height: 300, background: "#f9fafb", overflowY: "hidden", fontSize: 9 }}>

              {/* App header */}
              <div
                className="flex items-center justify-between px-3 py-2 border-b"
                style={{ background: "#fff", borderColor: "#e5e7eb" }}
              >
                <div>
                  <div className="font-bold" style={{ fontSize: 11, color: "#111" }}>Shinoby</div>
                  <div style={{ color: "#9ca3af", fontSize: 8 }}>解約・名義変更管理システム</div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center gap-1 rounded-full border px-2 py-0.5"
                    style={{ borderColor: "#d1d5db", color: "#374151", fontSize: 8 }}
                  >
                    <span>📱</span><span>遺族向け画面</span>
                  </div>
                  <div className="flex items-center gap-1" style={{ color: "#374151", fontSize: 8 }}>
                    <span>👤</span>
                    <div className="text-right">
                      <div style={{ fontSize: 7, color: "#9ca3af" }}>相続対応部</div>
                      <div style={{ fontSize: 8 }}>山田 太郎</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Page title */}
              <div className="px-3 pt-2 pb-1.5">
                <div className="font-bold" style={{ fontSize: 12, color: "#111" }}>解約手続き管理</div>
                <div style={{ color: "#9ca3af", fontSize: 8 }}>死亡に伴う解約・名義変更案件の一覧</div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-1.5 px-3 pb-2">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-1.5 rounded-xl p-2"
                    style={{ background: "#fff", border: "1px solid #f3f4f6" }}
                  >
                    <div
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: s.iconBg, color: s.iconColor, fontSize: 9 }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <div style={{ color: "#9ca3af", fontSize: 7, lineHeight: 1.2 }}>{s.label}</div>
                      <div className="font-bold" style={{ color: "#111", fontSize: 10 }}>{s.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 px-3 pb-1.5">
                <div
                  className="rounded-full px-3 py-0.5"
                  style={{ background: "#fff", border: "1px solid #e5e7eb", color: "#374151", fontSize: 8 }}
                >
                  新規申請
                </div>
                <div
                  className="flex items-center gap-1 rounded-full px-3 py-0.5"
                  style={{ background: "#111", color: "#fff", fontSize: 8 }}
                >
                  検証済みパック
                  <span
                    className="flex h-3.5 w-3.5 items-center justify-center rounded-full text-white"
                    style={{ background: "#22c55e", fontSize: 7 }}
                  >1</span>
                </div>
              </div>

              {/* Filter bar */}
              <div
                className="mx-3 mb-1.5 flex items-center gap-2 rounded-xl px-2 py-1.5"
                style={{ background: "#fff", border: "1px solid #e5e7eb" }}
              >
                <span style={{ color: "#374151", fontSize: 8 }}>ステータス：</span>
                <div
                  className="flex items-center gap-1 rounded-lg border px-1.5 py-0.5"
                  style={{ borderColor: "#d1d5db", color: "#374151", fontSize: 8 }}
                >
                  すべて <span style={{ fontSize: 7 }}>▾</span>
                </div>
                <div className="flex items-center gap-1 ml-1" style={{ color: "#374151", fontSize: 8 }}>
                  <div className="h-2 w-2 rounded-sm" style={{ background: "#374151" }} />
                  不備ありのみ表示
                </div>
              </div>

              {/* Table */}
              <div className="mx-3 rounded-xl overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>
                {/* Header */}
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: "72px 60px 80px 70px 60px 18px 64px 50px 30px",
                    background: "#f9fafb",
                    borderBottom: "1px solid #e5e7eb",
                    padding: "4px 6px",
                    color: "#6b7280",
                    fontSize: 7,
                    fontWeight: 600,
                  }}
                >
                  {["申請ID", "被相続人\n氏名", "申請者（続柄）", "対象サービス", "ステータス", "不\n備", "受付日", "担当者", "操作"].map((h) => (
                    <div key={h} style={{ whiteSpace: "pre-wrap", lineHeight: 1.2 }}>{h}</div>
                  ))}
                </div>
                {/* Rows */}
                {rows.map((row) => (
                  <div
                    key={row.id}
                    className="grid items-center"
                    style={{
                      gridTemplateColumns: "72px 60px 80px 70px 60px 18px 64px 50px 30px",
                      borderBottom: "1px solid #f3f4f6",
                      padding: "5px 6px",
                      fontSize: 8,
                      color: "#111",
                    }}
                  >
                    <div style={{ color: "#4b5563" }}>{row.id}</div>
                    <div>{row.heir}</div>
                    <div>{row.applicant}</div>
                    <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.3 }}>{row.service}</div>
                    <div>
                      <span
                        className="rounded-full px-1.5 py-0.5"
                        style={{ background: row.statusColor, color: row.statusText, fontSize: 7 }}
                      >
                        {row.status}
                      </span>
                    </div>
                    <div style={{ color: row.hasAlert ? "#EF4444" : "#d1d5db", fontSize: 10 }}>
                      {row.hasAlert ? "⚠" : "—"}
                    </div>
                    <div style={{ color: "#6b7280" }}>{row.date}</div>
                    <div>{row.staff}</div>
                    <div>
                      <span
                        className="rounded border px-1 py-0.5"
                        style={{ borderColor: "#d1d5db", color: "#374151", fontSize: 7 }}
                      >
                        詳細
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
        {/* Hinge */}
        <div style={{ height: 6, background: "linear-gradient(to bottom, #c8c8c8, #b0b0b0)" }} />
        {/* Base */}
        <div
          className="mx-auto rounded-b-xl"
          style={{ height: 14, width: "88%", background: "linear-gradient(to bottom, #d8d8d8, #c0c0c0)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
        />
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
