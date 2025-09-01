"use client";
import React from "react";

interface Certifications {
  cert: string;
  logo: string;
}

interface CertificationsCardProps {
  certifications: Certifications;
}

const CertificationsCard: React.FC<CertificationsCardProps> = ({ certifications }) => {
  return (
    <div className="bg-[var(--color-mini-card)] rounded-lg shadow-md flex flex-col items-center w-40 min-h-[115px]">
      <div className="flex items-center justify-center">
        <img
          src={certifications.logo}
          alt={certifications.cert}
          className="mt-4 w-14 h-14 object-contain"
        />
      </div>

      <p className="mt-2 text-sm font-semibold text-center text-[var(--color-text)]">
        {certifications.cert}
      </p>
    </div>
  );
};

export default CertificationsCard;
