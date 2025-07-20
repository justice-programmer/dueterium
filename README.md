# 🧬 Deuterium
A lightweight and customizable UI component library for Svelte, designed to be adaptive, accessible, and themable across modern applications.
Built for developers who value simplicity, flexibility, and clean design—without sacrificing functionality.


🚀 Features
- ⚡ Component-first architecture with Svelte & TypeScript
- 🎨 Global theming with font and style overrides
- 📦 Optimized for Vite and npm publishing
- 🧪 Type-safe props and intuitive bindings
- 🧩 Layout-aware components that adapt to user-defined styles

📦 Installation
```
npm install deuterium-ui
# or
yarn add deuterium-ui
```



🛠️ Example Usage
```svelte
<script lang="ts">
  import { Input, Button } from 'deuterium-ui';
  import { writable } from 'svelte/store';

  const email = writable('');
</script>

<Input
  type="email"
  placeholder="Email"
  bind:value={$email}
/>

<Button
  type="primary"
  clickHandler={() => console.log("Submitted:", $email)}
>
  Submit
</Button>
```


🧰 Development Setup
```
git clone https://github.com/justice-programmer/deuterium.git
cd deuterium
pnpm install
pnpm dev
```


🤝 Contributing
Open to developers who care about clean UI, modularity, and expressive design.
Whether it’s a fix, feature, or component idea, pull requests are always welcome.

📜 License
MIT — free to use, extend, and integrate into your projects.


