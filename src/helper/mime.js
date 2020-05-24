const path = require('path');
const mimeTypes = {
  "css": {
    type: "text/css",
    icon: '/assets/css.png'
  },
  "gif": {
    type: "image/gif",
    icon: '/assets/GIF.png'
  },
  "html": {
    type: "text/html",
    icon: '/assets/html.png'
  },
  "icon": {
    type: "image/x-icon",
    icon: '/assets/zhinanzhen.png'
  },
  "jpeg": {
    type: "image/jpeg",
    icon: '/assets/JPEG.png'
  },
  "jpg": {
    type: "image/jpeg",
    icon: "/assets/JPG.png"
  },
  "pdf": {
    type: "application/pdf",
    icon: '/assets/pdf.png'
  },
  "png": {
    type: "image/png",
    icon: '/assets/png.png'
  },
  "svg": {
    type: "image/svg+xml",
    icon: "/assets/f-svg.png"
  },
  "swf": {
    type: "application/x-shockwave-flash",
    icon: "/assets/SWF.png"
  },
  "tiff": {
    type: "image/tiff",
    icon: "/assets/Tiff.png"
  },
  "txt": {
    type: "text/plain",
    icon: "/assets/txt.png"
  },
  "wav": {
    type: "audio/x-wav",
    icon: "/assets/wav.png"
  },
  "wma": {
    type: "audio/x-ms-wma",
    icon: "/assets/wma.png"
  },
  "wmv": {
    type: "audio/x-ms-wmv",
    icon: "/assets/wmv.png"
  },
  "xml": {
    type: "text/xml",
    icon: "/assets/xml.png"
  },
  "json": {
    type: "application/json",
    icon: "/assets/JSON.png"
  },
  "js": {
    type: "application/javascript",
    icon: "/assets/js.png"
  }
}


module.exports = (filePath)=>{
  let ext = path.extname(filePath)
  .split(".")
  .pop()
  .toLowerCase();

  if(!ext){
    ext = filePath
  }

  return mimeTypes[ext] || mimeTypes['txt']
}
