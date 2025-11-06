import { ProductData } from "@/types/product";

import bulletCameraImage from "@assets/image_1759637441452.png";
import domeCameraImage from "@assets/image_1759637448962.png";
import doorLockImage from "@assets/image_1759637460170.png";

const productData: ProductData = {
  categories: [
    {
      id: "security-cameras",
      name: "Security Cameras",
      description: "Professional CCTV and surveillance cameras"
    },
    {
      id: "access-control",
      name: "Access Control",
      description: "Biometric and access control systems"
    }
  ],
  products: [
    {
      id: "white-eagle-bullet-camera",
      name: "White Eagle Bullet Camera",
      category: "security-cameras",
      price: 2800,
      originalPrice: 3500,
      image: bulletCameraImage,
      shortDescription: "Professional outdoor bullet camera with infrared night vision",
      description: "White Eagle professional bullet camera designed for outdoor surveillance with excellent infrared night vision and weatherproof housing. Features advanced motion detection and high-resolution recording.",
      features: [
        "High Definition Resolution",
        "Infrared Night Vision",
        "IP66 Weatherproof Rating",
        "Metal Body Construction",
        "Easy Installation",
        "Remote Monitoring",
        "Motion Detection Alerts",
        "Mobile App Access"
      ],
      specifications: {
        Resolution: "High Definition",
        Lens: "Fixed Lens",
        "Night Vision": "Advanced IR Technology",
        Audio: "Supported",
        Storage: "NVR/Cloud storage",
        Power: "12V DC",
        Warranty: "2 Years"
      },
      inStock: true,
      featured: true,
      rating: 4.8
    },
    {
      id: "white-eagle-dome-camera",
      name: "White Eagle Dome Camera",
      category: "security-cameras",
      price: 3200,
      originalPrice: 4000,
      image: domeCameraImage,
      shortDescription: "Advanced dome camera with color night vision and built-in LEDs",
      description: "White Eagle dome security camera with superior color night vision, built-in LED illumination, and weather-resistant construction. Perfect for 24/7 monitoring with crystal clear video quality.",
      features: [
        "Color Night Vision Technology",
        "Built-in LED Illumination",
        "High Definition Recording",
        "Metal Body - Weather Resistant",
        "Wide Viewing Angle",
        "Mobile App Remote Access",
        "Smart Motion Detection",
        "Professional Installation Included"
      ],
      specifications: {
        Resolution: "High Definition",
        Lens: "Wide Angle",
        "Night Vision": "Color Night Vision with LED",
        Audio: "Built-in Microphone",
        Storage: "Support up to 256GB SD card",
        Power: "12V DC / PoE",
        Warranty: "2 Years"
      },
      inStock: true,
      featured: true,
      rating: 4.9
    },
    {
      id: "electronic-door-lock",
      name: "Electronic Door Lock",
      category: "access-control",
      price: 3500,
      originalPrice: 4500,
      image: doorLockImage,
      shortDescription: "Professional electronic lock with secure access control",
      description: "Advanced electronic door lock system providing secure access control for residential and commercial applications. Features durable construction and reliable locking mechanism.",
      features: [
        "Secure Electronic Locking",
        "Durable Metal Construction",
        "Easy Installation",
        "Multiple Access Control",
        "Weather Resistant Design",
        "Emergency Override",
        "Low Power Consumption",
        "Professional Grade Security"
      ],
      specifications: {
        Type: "Electronic Lock",
        Material: "Stainless Steel",
        Power: "12V DC",
        "Lock Type": "Electric Control",
        Application: "Residential/Commercial",
        Certification: "Security Approved",
        Warranty: "2 Years"
      },
      inStock: true,
      featured: true,
      rating: 4.7
    }
  ]
};

export default productData;
