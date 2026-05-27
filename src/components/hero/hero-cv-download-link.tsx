"use client";

import { forwardRef } from "react";

import { siteConfig } from "@/config/site";

function isLocalCvPath(url: string) {
  return url.startsWith("/") && !url.startsWith("//");
}

export const HeroCvDownloadLink = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(function HeroCvDownloadLink({ children, onClick, href, download, ...props }, ref) {
  const { cvDownloadUrl, cvFileName, linkedInProfile } = siteConfig;
  const isLocal = isLocalCvPath(cvDownloadUrl);

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || !isLocal) return;

    event.preventDefault();

    try {
      const response = await fetch(cvDownloadUrl, { method: "HEAD" });

      if (response.ok) {
        const link = document.createElement("a");
        link.href = cvDownloadUrl;
        link.download = cvFileName;
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        link.remove();
        return;
      }
    } catch {}

    window.open(linkedInProfile, "_blank", "noopener,noreferrer");
  }

  return (
    <a
      ref={ref}
      href={href ?? cvDownloadUrl}
      download={isLocal ? (download ?? cvFileName) : undefined}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
});
