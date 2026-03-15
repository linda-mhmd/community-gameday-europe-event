import React, { useEffect, useState } from "react";
import { AudioIcon, MutedIcon, GamepadIcon, CalendarIcon, CheckCircleIcon, MonitorIcon, ClockIcon, UsersIcon, GlobeIcon, ChairIcon, CodeIcon } from "./icons";

const BASE = import.meta.env.BASE_URL;
const F = "'Amazon Ember','Inter',system-ui,sans-serif";
const D = "#0c0820", P = "#6c3fa0", V = "#8b5cf6", A = "#c084fc", G = "#fbbf24";
const DC = "rgba(255,255,255,0.65)";

const EVENT_DATE = "2026-03-17";
const MILESTONES = [
  { id: "preshow", time: "17:30", label: "Pre-Show Loop", desc: "Audio & stream test" },
  { id: "mainevent", time: "18:00", label: "Live Stream", desc: "Welcome, speakers & GameDay instructions" },
  { id: "gameplay", time: "18:30", label: "GameDay", desc: "2 hours of competitive cloud gaming across Europe" },
  { id: "closing", time: "20:30", label: "Closing Ceremony", desc: "Winners & wrap-up" },
];

function msUntil(t: string) { return Math.max(0, new Date(`${EVENT_DATE}T${t}:00`).getTime() - Date.now()); }
function fmt(ms: number) {
  const s = Math.floor(ms / 1000);
  return { d: Math.floor(s / 86400), h: String(Math.floor((s % 86400) / 3600)).padStart(2, "0"), m: String(Math.floor((s % 3600) / 60)).padStart(2, "0"), s: String(s % 60).padStart(2, "0") };
}

function useIsMobile() {
  const [m, setM] = useState(window.innerWidth < 768);
  useEffect(() => { const h = () => setM(window.innerWidth < 768); window.addEventListener("resize", h); return () => window.removeEventListener("resize", h); }, []);
  return m;
}

const Digit: React.FC<{ v: string; u: string; small?: boolean }> = ({ v, u, small }) => (
  <div style={{ background: `linear-gradient(180deg,${P}40,${D}dd)`, border: `1px solid ${V}30`, borderRadius: small ? 10 : 14, padding: small ? "8px 10px" : "14px 20px", textAlign: "center", minWidth: small ? 52 : 94 }}>
    <div style={{ fontSize: small ? 32 : 58, fontWeight: 800, fontFamily: F, color: G, lineHeight: 1 }}>{v}</div>
    <div style={{ fontSize: small ? 9 : 13, color: A, marginTop: small ? 2 : 4, textTransform: "uppercase", letterSpacing: 1.5 }}>{u}</div>
  </div>
);

const Sep: React.FC<{ small?: boolean }> = ({ small }) => <div style={{ fontSize: small ? 26 : 46, color: G, opacity: 0.5, paddingBottom: small ? 10 : 18, fontWeight: 300 }}>:</div>;

export const App: React.FC = () => {
  const [, tick] = useState(0);
  useEffect(() => { const i = setInterval(() => tick((n) => n + 1), 1000); return () => clearInterval(i); }, []);
  const mob = useIsMobile();

  const gMs = msUntil("18:30");
  const gT = fmt(gMs);
  const gLive = gMs === 0;

  if (mob) return (
    <div style={{ width: "100vw", minHeight: "100vh", position: "relative", fontFamily: F, background: D, overflowX: "hidden" }}>
      <img src={`${BASE}img/bg.png`} style={{ position: "fixed", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "fixed", inset: 0, background: "rgba(12,8,32,0.8)" }} />
      <div style={{ position: "relative", zIndex: 1, padding: "32px 20px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
        {/* Logos */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src={`${BASE}img/community.png`} style={{ height: 50 }} />
          <div style={{ width: 1, height: 32, background: `${P}55` }} />
          <img src={`${BASE}img/gameday.png`} style={{ height: 70 }} />
        </div>

        {/* Timer */}
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 14, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 3, marginBottom: 10 }}>
            <GamepadIcon size={18} color={G} /> Game Starts In
          </div>
          {gLive ? (
            <div style={{ fontSize: 40, fontWeight: 800, color: "#22c55e" }}>GAME ON</div>
          ) : (
            <div style={{ display: "flex", gap: 6, justifyContent: "center", alignItems: "flex-end" }}>
              {gT.d > 0 && <><Digit v={String(gT.d)} u="days" small /><Sep small /></>}
              <Digit v={gT.h} u="hrs" small /><Sep small />
              <Digit v={gT.m} u="min" small /><Sep small />
              <Digit v={gT.s} u="sec" small />
            </div>
          )}
          <div style={{ fontSize: 13, color: A, marginTop: 12, opacity: 0.85 }}>2 hours of competitive cloud gaming</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, marginTop: 4 }}>
            <GlobeIcon size={12} color={DC} />
            <span style={{ fontSize: 12, color: DC }}>53+ User Groups · 20+ Countries · 4+ Timezones</span>
          </div>
        </div>

        {/* Schedule */}
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: A, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>
            <CalendarIcon size={14} /> Schedule (CET)
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {MILESTONES.map((ms) => {
              const remaining = msUntil(ms.time);
              const isLive = remaining === 0;
              const t = fmt(remaining);
              const isPre = ms.id === "preshow";
              const isGame = ms.id === "gameplay";
              const isMuted = isPre || isGame;
              return (
                <div key={ms.id} style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 10,
                  background: isLive ? "#22c55e15" : isGame ? `${G}08` : "rgba(255,255,255,0.03)",
                  border: isLive ? "1px solid #22c55e44" : isGame ? `1px solid ${G}22` : "1px solid rgba(255,255,255,0.05)",
                  opacity: isPre ? 0.55 : 1,
                }}>
                  <div style={{ width: 42, textAlign: "center", flexShrink: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: isLive ? "#22c55e" : "white" }}>{ms.time}</div>
                    <div style={{ marginTop: 2 }}>{isMuted ? <MutedIcon size={12} /> : <AudioIcon size={12} />}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: isLive ? "#22c55e" : "white" }}>
                      {ms.label}
                      {isPre && <span style={{ fontSize: 10, color: DC, fontWeight: 400, fontStyle: "italic", marginLeft: 6 }}>optional</span>}
                    </div>
                    <div style={{ fontSize: 11, color: DC, marginTop: 1 }}>{ms.desc}</div>
                  </div>
                  <div style={{ flexShrink: 0, textAlign: "right" }}>
                    {isLive ? (
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#22c55e" }}>LIVE</span>
                    ) : (
                      <span style={{ fontSize: 13, fontWeight: 700, fontFamily: "monospace", color: isGame ? G : A }}>
                        {t.d > 0 ? `${t.d}d ` : ""}{t.h}:{t.m}:{t.s}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Get Ready */}
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: A, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>
            <CheckCircleIcon size={14} /> Get Ready
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { icon: <UsersIcon size={15} />, text: "Form your team locally before the stream" },
              { icon: <ChairIcon size={15} />, text: "Be seated with audio ready 5 min before start" },
              { icon: <MonitorIcon size={15} />, text: "Watch the live stream for instructions" },
              { icon: <CodeIcon size={15} />, text: "Team codes distributed locally, then game on" },
              { icon: <ClockIcon size={15} />, text: "Stream returns after 2h for the closing ceremony" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13, color: "rgba(255,255,255,0.9)" }}>
                <span style={{ flexShrink: 0 }}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: 1, textAlign: "center", marginTop: 8 }}>
          The first-ever AWS Community GameDay across Europe
        </div>
      </div>
    </div>
  );

  // ── Desktop (unchanged layout) ──
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", fontFamily: F, overflow: "hidden", background: D }}>
      <img src={`${BASE}img/bg.png`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(12,8,32,0.75)" }} />
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}>
        <defs><pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse"><path d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z" fill="none" stroke={P} strokeWidth={0.5} /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      <div style={{ position: "absolute", left: 0, top: 0, width: "55%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
          <img src={`${BASE}img/community.png`} style={{ height: 100 }} />
          <div style={{ width: 1, height: 60, background: `${P}55` }} />
          <img src={`${BASE}img/gameday.png`} style={{ height: 140 }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 20, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 4, marginBottom: 14 }}>
            <GamepadIcon size={24} color={G} /> Game Starts In
          </div>
          {gLive ? (
            <div style={{ fontSize: 68, fontWeight: 800, color: "#22c55e", textShadow: "0 0 40px #22c55e44" }}>GAME ON</div>
          ) : (
            <div style={{ display: "flex", gap: 10, justifyContent: "center", alignItems: "flex-end" }}>
              {gT.d > 0 && <><Digit v={String(gT.d)} u="days" /><Sep /></>}
              <Digit v={gT.h} u="hours" /><Sep />
              <Digit v={gT.m} u="min" /><Sep />
              <Digit v={gT.s} u="sec" />
            </div>
          )}
          <div style={{ fontSize: 17, color: A, marginTop: 18, opacity: 0.85 }}>2 hours of competitive cloud gaming</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 6 }}>
            <GlobeIcon size={16} color={DC} />
            <span style={{ fontSize: 15, color: DC }}>53+ User Groups across 20+ Countries in 4+ Timezones</span>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", right: 0, top: 0, width: "45%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 36px 0 0", marginTop: -20 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: A, textTransform: "uppercase", letterSpacing: 3, marginBottom: 14 }}>
            <CalendarIcon size={18} /> Schedule (CET)
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {MILESTONES.map((ms) => {
              const remaining = msUntil(ms.time);
              const isLive = remaining === 0;
              const t = fmt(remaining);
              const isPre = ms.id === "preshow";
              const isGame = ms.id === "gameplay";
              const isMuted = isPre || isGame;
              return (
                <div key={ms.id} style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "11px 16px", borderRadius: 12,
                  background: isLive ? "#22c55e15" : isGame ? `${G}08` : "rgba(255,255,255,0.03)",
                  border: isLive ? "1px solid #22c55e44" : isGame ? `1px solid ${G}22` : "1px solid rgba(255,255,255,0.05)",
                  opacity: isPre ? 0.55 : 1,
                }}>
                  <div style={{ width: 54, textAlign: "center" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: isLive ? "#22c55e" : "white" }}>{ms.time}</div>
                    <div style={{ marginTop: 3 }}>{isMuted ? <MutedIcon size={15} /> : <AudioIcon size={15} />}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 17, fontWeight: 700, color: isLive ? "#22c55e" : "white" }}>
                      {ms.label}
                      {isPre && <span style={{ fontSize: 12, color: DC, fontWeight: 400, fontStyle: "italic", marginLeft: 8 }}>optional</span>}
                    </div>
                    <div style={{ fontSize: 13, color: DC, marginTop: 2 }}>{ms.desc}</div>
                  </div>
                  <div style={{ width: 105, textAlign: "right" }}>
                    {isLive ? (
                      <span style={{ fontSize: 15, fontWeight: 700, color: "#22c55e" }}>LIVE</span>
                    ) : (
                      <span style={{ fontSize: 17, fontWeight: 700, fontFamily: "monospace", color: isGame ? G : A }}>
                        {t.d > 0 ? `${t.d}d ` : ""}{t.h}:{t.m}:{t.s}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ marginTop: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: A, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>
            <CheckCircleIcon size={18} /> Get Ready
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {[
              { icon: <UsersIcon size={17} />, text: "Form your team locally before the stream" },
              { icon: <ChairIcon size={17} />, text: "Be seated with audio ready 5 min before start" },
              { icon: <MonitorIcon size={17} />, text: "Watch the live stream for instructions" },
              { icon: <CodeIcon size={17} />, text: "Team codes distributed locally, then game on" },
              { icon: <ClockIcon size={17} />, text: "Stream returns after 2h for the closing ceremony" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 15, color: "rgba(255,255,255,0.9)" }}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 34, background: `linear-gradient(90deg,${P}22,${V}11,${P}22)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: 1 }}>The first-ever AWS Community GameDay across Europe</span>
      </div>
    </div>
  );
};
