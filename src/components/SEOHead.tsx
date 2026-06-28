import { Helmet } from "react-helmet-async";

const BASE_URL = "https://apex-access-web.lovable.app";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export const SEOHead = ({
  title,
  description,
  canonicalPath,
  ogType = "website",
  jsonLd,
}: SEOHeadProps) => {
  const canonical = `${BASE_URL}${canonicalPath}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
};
