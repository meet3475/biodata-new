const fs = require("fs");
const path = require("path");
 
const siteUrl = "https://marriagebiodatamaker.com";
const outputDir = path.join(__dirname, "../public");
 
// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`✅ Created output directory: ${outputDir}`);
}
 
// Sitemap generator function
const generateSitemap = async () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<?xml-stylesheet type="text/xsl" href="sitemap-style.xsl"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
 
    const staticPages = ["", "/about-us", "/contact-us"];
    staticPages.forEach((route) => {
        xml += `<url>
            <loc>${siteUrl}${route}</loc>
            <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
            </url>\n`;
                });
 
        xml += `</urlset>`;
 
    const sitemapPath = path.join(outputDir, "sitemap.xml");
    fs.writeFileSync(sitemapPath, xml, "utf8");
    console.log(`✅ Sitemap successfully generated: ${sitemapPath}`);
};
 
// Run the script
console.log("🚀 Starting sitemap generation...");
generateSitemap()
    .then(() => console.log("✨ Sitemap generation completed!"))
    .catch((error) => {
        console.error("❌ Fatal error during sitemap generation:", error);
        process.exit(1);
    });