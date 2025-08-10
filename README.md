# Next.js Seyahat Uygulaması & CMS

Bu proje, Next.js, React ve TypeScript kullanarak geliştirilmiş, seyahat odaklı dinamik bir web uygulamasıdır. Kullanıcı yönetimi, state yönetimi ve veritabanı işlemlerini modern ve güçlü teknolojilerle ele alarak tam bir full-stack deneyimi sunar.

## Canlı Bağlantı

Projenin canlı versiyonuna  ulaşabilirsiniz.

## Kullanılan Teknolojiler

-   **Frontend:**
    -   [Next.js](https://nextjs.org/)
    -   [React](https://reactjs.org/)
    -   [TypeScript](https://www.typescriptlang.org/)
    -   [Zustand](https://zustand-demo.pmnd.rs/) (Durum Yönetimi)
    -   [Kullandığınız CSS kütüphanesi] (örn. Tailwind CSS, SASS vb.)

-   **Backend:**
    -   [Prisma](https://www.prisma.io/) (ORM ve Veritabanı Katmanı)
    -   [Clerk](https://clerk.com/) (Kimlik Doğrulama)

``````
├── app/                  # Next.js uygulama dizini
│   ├── (auth)/           # Clerk ile kimlik doğrulama sayfaları
│   ├── (home)/           # Ana sayfa ve ilgili bileşenler
│   ├── hotels/           # Otel listeleme ve detay sayfaları
│   ├── layout.tsx        # Ana sayfa düzeni
│   ├── globals.css       # Global CSS dosyası
│   └── ...
├── components/           # Yeniden kullanılabilir React bileşenleri
├── lib/                  # Helper fonksiyonları ve kütüphaneler
├── prisma/               # Prisma veritabanı şeması ve migration dosyaları
│   └── schema.prisma
├── hooks/                # Özel React hook'ları (örn. useIsMobile)
├── providers/            # Context ve provider'lar (örn. ClientProviders)
├── node_modules/
├── public/               # Statik dosyalar
├── zustand/              # Zustand state yönetim dosyaları
├── package.json
├── tsconfig.json
└── README.md
``````

## Hazırlayan

-   Nurullah Mencik - nurullahemncik42@gmail.com