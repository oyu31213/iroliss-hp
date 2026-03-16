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
  return (
    <div className="relative flex justify-center">
      {/* Laptop */}
      <div className="relative" style={{ maxWidth: 440, width: "100%" }}>
        {/* Screen shell */}
        <div
          className="rounded-t-xl p-2"
          style={{ background: "#2A2535", border: "2px solid #3D3650" }}
        >
          {/* Top bar */}
          <div
            className="mb-2 flex items-center gap-2 rounded-md px-3 py-1.5"
            style={{ background: "#1A1525" }}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FF6058" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28CA41" }} />
            <div
              className="ml-2 flex-1 rounded px-2 py-0.5 text-center text-xs"
              style={{ background: "#2A2535", color: "#9B8EC4" }}
            >
              admin.iroliss.com
            </div>
          </div>
          {/* Screen content — dashboard mockup */}
          <div
            className="overflow-hidden rounded"
            style={{ height: 200, background: "#1E1630" }}
          >
            <div className="flex h-full">
              <div
                className="w-36 p-3"
                style={{ background: "#150F25", borderRight: "1px solid #2D2450" }}
              >
                <div
                  className="mb-3 rounded px-2 py-1 text-xs font-medium text-white"
                  style={{ background: "var(--purple)" }}
                >
                  ダッシュボード
                </div>
                {["申請一覧", "書類確認", "設定"].map((item) => (
                  <div key={item} className="mb-1 rounded px-2 py-1 text-xs" style={{ color: "#9B8EC4" }}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex-1 p-3">
                <div className="mb-2 grid grid-cols-3 gap-2">
                  {[
                    { label: "処理中", val: "12", color: "#7B5BB0" },
                    { label: "完了", val: "48", color: "#3D7A5F" },
                    { label: "差戻し", val: "2", color: "#E05C5C" },
                  ].map((s) => (
                    <div key={s.label} className="rounded p-2 text-center" style={{ background: "#2A2045" }}>
                      <div className="text-lg font-bold" style={{ color: s.color }}>{s.val}</div>
                      <div className="text-xs" style={{ color: "#9B8EC4" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded p-2" style={{ background: "#2A2045" }}>
                  {[
                    { name: "山田 花子", status: "書類確認待ち" },
                    { name: "佐藤 一郎", status: "完了" },
                    { name: "鈴木 次郎", status: "処理中" },
                  ].map((r) => (
                    <div
                      key={r.name}
                      className="flex justify-between border-b py-1 text-xs last:border-0"
                      style={{ borderColor: "#3D3060", color: "#C4B8E0" }}
                    >
                      <span>{r.name}</span>
                      <span style={{ color: "#9B8EC4" }}>{r.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hinge */}
        <div
          className="mx-auto h-2 w-3/4"
          style={{ background: "linear-gradient(to bottom, #3D3650, #2A2535)" }}
        />
        {/* Base */}
        <div
          className="mx-auto h-3 w-5/6 rounded-b-lg"
          style={{ background: "linear-gradient(to bottom, #2A2535, #1A1525)" }}
        />

        {/* Smartphone — overlapping bottom-right */}
        <div
          className="absolute right-0 z-10"
          style={{ width: 160, bottom: -40 }}
        >
          <div
            className="overflow-hidden rounded-2xl"
            style={{ background: "#1A1525", border: "2px solid #3D3650", paddingTop: 8, paddingBottom: 8 }}
          >
            {/* Notch */}
            <div className="mb-1 flex justify-center">
              <div className="h-1 w-16 rounded-full" style={{ background: "#3D3650" }} />
            </div>
            {/* Chat screen */}
            <div className="overflow-hidden px-2" style={{ height: 180, background: "#120E20" }}>
              <div className="pt-2 text-xs" style={{ color: "#9B8EC4" }}>
                <div className="mb-1 text-center" style={{ fontSize: 10 }}>Shinoby</div>
                {[
                  { me: false, text: "必要書類を教えてください" },
                  { me: true, text: "死亡診断書・戸籍謄本・通帳のコピーをご用意ください" },
                  { me: false, text: "わかりました" },
                ].map((msg, i) => (
                  <div key={i} className={`mb-1.5 flex ${msg.me ? "justify-end" : "justify-start"}`}>
                    <div
                      className="max-w-[90%] rounded-lg px-2 py-1 text-white"
                      style={{ background: msg.me ? "var(--purple)" : "#2A2045", fontSize: 9 }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Home bar */}
            <div className="mt-1 flex justify-center">
              <div className="h-1 w-12 rounded-full" style={{ background: "#3D3650" }} />
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
