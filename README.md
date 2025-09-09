# BankDash 💳

A modern and responsive banking dashboard built with Next.js and Tailwind CSS.

## 🚀 Installation

1. Clone the repository
```bash
git clone https://github.com/moharissof/bank-dash.git
cd bank-dash
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Folder Structure

```
bank-dash/
├── public/
│   ├── images/
│   │   ├── Logo.png
│   │   ├── user.png
│   │   └── avatar*.png
│   └── icons/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── BalanceHistory.tsx
│   │   │   ├── CreditCard.tsx
│   │   │   ├── ExpenseStatistics.tsx
│   │   │   ├── QuickTransfer.tsx
│   │   │   ├── RecentTransaction.tsx
│   │   │   └── WeeklyActivity.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── main.tsx
│   │   │   └── sidebar.tsx
│   │   └── ui/
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       └── input.tsx
│   └── lib/
│       └── utils.ts
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 📱 Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI** - Clean and intuitive interface
- **Dashboard Components** - Credit cards, transactions, analytics
- **Mobile Navigation** - Slide-out sidebar for mobile devices
- **Profile Management** - User profile modal with account settings

## 🛠 Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Heroicons](https://heroicons.com/) - Icon library
- [Recharts](https://recharts.org/) - Data visualization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
