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
  const auditLog = [
    { label: "受付", date: "2024-12-20 10:30:00", desc: "顧客からのWeb申請を受付", done: true },
    { label: "書類確認開始", date: "2024-12-20 11:00:00", desc: "提出書類の確認作業を開始", done: true },
    { label: "AI自動検証", date: "2024-12-20 11:15:00", desc: "全書類のOCR処理と自動検証を完了", done: true },
    { label: "不備検出", date: "2024-12-20 14:30:00", desc: "死亡診断書の記載日付に不備を検出", done: false },
    { label: "処理完了", date: "2024-12-24 15:30:00", desc: "すべての手続きが完了し、解約処理が正常に終了しました", done: true, final: true },
  ];

  return (
    <div className="relative flex justify-center" style={{ paddingBottom: 60 }}>
      {/* ── Laptop ── */}
      <div className="relative" style={{ maxWidth: 480, width: "100%" }}>
        {/* Lid / screen */}
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
            style={{ background: "#111", padding: "6px 6px 0" }}
          >
            {/* Screen content — light UI */}
            <div style={{ height: 260, background: "#f5f5f7", overflowY: "hidden" }}>
              {/* App header */}
              <div
                className="flex items-center gap-2 border-b px-3 py-2"
                style={{ background: "#fff", borderColor: "#e5e7eb" }}
              >
                <span className="text-sm font-bold" style={{ color: "#1C1C1C" }}>Shinoby</span>
                <span className="text-xs" style={{ color: "#9ca3af" }}>解約・名義変更管理システム</span>
              </div>
              {/* Back + title */}
              <div className="px-3 pt-2 pb-1 border-b" style={{ background: "#fff", borderColor: "#e5e7eb" }}>
                <div className="text-xs mb-0.5" style={{ color: "#6B7280" }}>← 詳細に戻る</div>
                <div className="text-sm font-bold" style={{ color: "#1C1C1C" }}>解約完了・監査ログ - C2024-001</div>
                <div className="text-xs" style={{ color: "#9ca3af" }}>処理完了の記録と証跡</div>
              </div>
              {/* Body — two columns */}
              <div className="flex gap-0" style={{ height: 185 }}>
                {/* Left panel */}
                <div
                  className="flex-none overflow-hidden border-r p-3"
                  style={{ width: 180, borderColor: "#e5e7eb", background: "#fff" }}
                >
                  {/* Status badge */}
                  <div className="mb-2 flex items-center gap-1.5">
                    <span
                      className="flex h-4 w-4 items-center justify-center rounded-full text-white"
                      style={{ background: "#22c55e", fontSize: 8 }}
                    >✓</span>
                    <div>
                      <div className="text-xs font-medium" style={{ color: "#6B7280" }}>ステータス</div>
                      <div className="text-xs font-bold" style={{ color: "#1C1C1C" }}>処理完了</div>
                    </div>
                  </div>
                  <div className="space-y-1.5 border-t pt-2" style={{ borderColor: "#e5e7eb" }}>
                    {[
                      { label: "完了日", val: "2024-12-24 15:30:00" },
                      { label: "対応者", val: "山田 太郎" },
                      { label: "処理日数", val: "4日" },
                    ].map((r) => (
                      <div key={r.label}>
                        <div className="text-xs" style={{ color: "#9ca3af", fontSize: 9 }}>{r.label}</div>
                        <div className="text-xs font-medium" style={{ color: "#1C1C1C", fontSize: 10 }}>{r.val}</div>
                      </div>
                    ))}
                    <div className="border-t pt-1.5" style={{ borderColor: "#e5e7eb" }}>
                      <div className="text-xs font-medium mb-0.5" style={{ color: "#6B7280", fontSize: 9 }}>解約対象</div>
                      {[
                        { label: "被相続人", val: "田中 一郎" },
                        { label: "申請者", val: "田中 花子（配）" },
                      ].map((r) => (
                        <div key={r.label}>
                          <div className="text-xs" style={{ color: "#9ca3af", fontSize: 9 }}>{r.label}</div>
                          <div className="text-xs font-medium" style={{ color: "#1C1C1C", fontSize: 10 }}>{r.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Right panel — audit log */}
                <div className="flex-1 overflow-hidden p-3" style={{ background: "#f5f5f7" }}>
                  <div className="mb-2 text-xs font-bold" style={{ color: "#1C1C1C" }}>監査ログ（時系列）</div>
                  <div className="space-y-1.5">
                    {auditLog.map((item) => (
                      <div key={item.label} className="flex gap-2">
                        <div className="flex flex-col items-center">
                          <span
                            className="h-2 w-2 rounded-full shrink-0 mt-0.5"
                            style={{ background: item.final ? "#22c55e" : item.done ? "#3b82f6" : "#d1d5db" }}
                          />
                        </div>
                        <div>
                          <div className="text-xs font-medium" style={{ color: "#1C1C1C", fontSize: 9 }}>{item.label}</div>
                          <div style={{ color: "#9ca3af", fontSize: 8 }}>{item.date}</div>
                          <div
                            className="rounded px-1 py-0.5 text-xs"
                            style={{
                              fontSize: 8,
                              color: item.final ? "#166534" : "#374151",
                              background: item.final ? "#dcfce7" : "transparent",
                            }}
                          >
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hinge */}
        <div
          style={{
            height: 6,
            background: "linear-gradient(to bottom, #c8c8c8, #b0b0b0)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        />
        {/* Base */}
        <div
          className="mx-auto rounded-b-xl"
          style={{
            height: 16,
            width: "90%",
            background: "linear-gradient(to bottom, #d8d8d8, #c0c0c0)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        />

        {/* ── Smartphone — overlapping bottom-right ── */}
        <div
          className="absolute z-10"
          style={{ width: 148, bottom: -48, right: -8 }}
        >
          <div
            className="overflow-hidden rounded-3xl"
            style={{
              background: "#111",
              border: "2px solid #333",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* Notch */}
            <div className="flex justify-center py-1.5" style={{ background: "#111" }}>
              <div className="h-2 w-14 rounded-full" style={{ background: "#333" }} />
            </div>
            {/* Screen */}
            <div style={{ background: "#fff", minHeight: 220 }}>
              {/* App header */}
              <div
                className="flex items-center gap-1.5 border-b px-2 py-1.5"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div
                  className="flex h-5 w-5 items-center justify-center rounded"
                  style={{ background: "var(--purple)" }}
                >
                  <span className="text-white font-bold" style={{ fontSize: 8 }}>S</span>
                </div>
                <div>
                  <div className="font-bold" style={{ fontSize: 9, color: "#1C1C1C" }}>Shinoby AIアシスタント</div>
                  <div style={{ fontSize: 7, color: "#9ca3af" }}>お手続きをサポートします</div>
                </div>
              </div>
              {/* Chat */}
              <div className="px-2 pt-2 space-y-1.5">
                {/* AI bubble */}
                <div className="flex gap-1">
                  <div className="h-4 w-4 rounded-full shrink-0 flex items-center justify-center" style={{ background: "var(--purple)" }}>
                    <span className="text-white" style={{ fontSize: 7 }}>A</span>
                  </div>
                  <div className="rounded-lg rounded-tl-none px-2 py-1.5 text-white" style={{ background: "var(--purple)", fontSize: 8, maxWidth: "85%" }}>
                    こんにちは。Shinobyです。この度はご悲傷様でございます。お手続きのお手伝いをさせていただきます。
                  </div>
                </div>
                {/* AI bubble */}
                <div className="flex gap-1">
                  <div className="h-4 w-4 rounded-full shrink-0 flex items-center justify-center" style={{ background: "var(--purple)" }}>
                    <span className="text-white" style={{ fontSize: 7 }}>A</span>
                  </div>
                  <div className="rounded-lg rounded-tl-none px-2 py-1.5 text-white" style={{ background: "var(--purple)", fontSize: 8, maxWidth: "85%" }}>
                    まず、お亡くなりになられた方について教えてください。どなたが亡くなられましたか？
                  </div>
                </div>
                {/* Choice buttons */}
                <div className="flex flex-wrap gap-1 pl-5">
                  {["父", "母", "配偶者", "その他"].map((opt) => (
                    <div
                      key={opt}
                      className="rounded-full border px-2 py-0.5"
                      style={{ fontSize: 8, borderColor: "var(--purple)", color: "var(--purple)" }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
                {/* User reply */}
                <div className="flex justify-end">
                  <div
                    className="rounded-lg rounded-tr-none px-2 py-1.5 text-white"
                    style={{ background: "var(--purple)", fontSize: 8 }}
                  >
                    父
                  </div>
                </div>
              </div>
            </div>
            {/* Input bar */}
            <div
              className="flex items-center gap-1 px-2 py-1.5 border-t"
              style={{ background: "#fff", borderColor: "#e5e7eb" }}
            >
              <div
                className="flex-1 rounded-full px-2 py-1"
                style={{ background: "#f3f4f6", fontSize: 8, color: "#9ca3af" }}
              >
                メッセージを入力...
              </div>
              <div
                className="flex h-5 w-5 items-center justify-center rounded-full text-white shrink-0"
                style={{ background: "var(--purple)", fontSize: 9 }}
              >
                ↑
              </div>
            </div>
            {/* Home bar */}
            <div className="flex justify-center py-1.5" style={{ background: "#fff" }}>
              <div className="h-1 w-10 rounded-full" style={{ background: "#d1d5db" }} />
            </div>
          </div>
        </div>
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
