"use client";

const WA_LINK = "https://wa.me/5511960175164";

export default function WhatsAppFab() {
  return (
    <a
      id="whatsapp-fab"
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 9990,
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        textDecoration: "none",
        animation: "pulse-dot 2.5s ease-in-out infinite",
      }}
    >
      {/* Pulse ring */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "rgba(37,211,102,0.5)",
          animation: "pulse-ring 2.5s ease-out infinite",
        }}
      />
      {/* WhatsApp icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="#ffffff"
        style={{ position: "relative", zIndex: 1 }}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.559 4.136 1.534 5.874L0 24l6.336-1.502A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.5-5.261-1.373l-.378-.222-3.762.892.934-3.653-.245-.39A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    </a>
  );
}
