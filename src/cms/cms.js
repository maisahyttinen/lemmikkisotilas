// import CMS from "netlify-cms-app";
// import uploadcare from "netlify-cms-media-library-uploadcare";
// import cloudinary from "netlify-cms-media-library-cloudinary";

// // import AboutPagePreview from './preview-templates/AboutPagePreview'
// // import BlogPostPreview from './preview-templates/BlogPostPreview'
// // import ProductPagePreview from './preview-templates/ProductPagePreview'
// // import IndexPagePreview from "./preview-templates/IndexPagePreview";

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

// // CMS.registerPreviewTemplate("index", IndexPagePreview);
// // CMS.registerPreviewTemplate('about', AboutPagePreview)
// // CMS.registerPreviewTemplate('products', ProductPagePreview)
// // CMS.registerPreviewTemplate('blog', BlogPostPreview)

import CMS from "netlify-cms-app";
const config = {};
// Important to remove your backend config and replace it in this setup
if (process.env.NODE_ENV === "development") {
  const FileSystemBackend = require("netlify-cms-backend-fs");
  config.backend = {
    name: "file-system",
    api_root: "/api",
  };
  config.display_url = "http://localhost:8000";
  CMS.registerBackend("file-system", FileSystemBackend);
} else {
  config.backend = {
    backend: {
      name: "github",
      repo: "ADARTA/gatsby-starter-netlify-cms",
      branch: "master",
    },
  };
}
CMS.init({ config });
