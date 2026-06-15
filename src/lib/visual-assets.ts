/** Local Keskese photography used across the site. */
export const KESKESE_IMAGES = [
  "/images/keskese-web-1.jpg",
  "/images/keskese-web-2.jpg",
  "/images/keskese-web-3.jpg",
  "/images/keskese-web-4.jpg",
  "/images/keskese-web-6.jpg",
  "/images/keskese-web-7.jpg",
  "/images/keskese-web-8.jpg",
  "/images/keskese-about-section-image.png",
] as const;

export const STOCK_IMAGES = KESKESE_IMAGES;
export const STOCK_IMAGES_SM = KESKESE_IMAGES;

/** HD (1080p) clips — much lighter than UHD sources. */
export const STOCK_VIDEOS = {
  crowd:
    "https://videos.pexels.com/video-files/854397/854397-hd_1920_1080_25fps.mp4",
  concert:
    "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4",
  festival:
    "https://videos.pexels.com/video-files/3191572/3191572-hd_1920_1080_30fps.mp4",
} as const;
