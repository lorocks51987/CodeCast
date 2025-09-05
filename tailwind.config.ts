import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				mono: ['Fira Code', 'monospace'],
				space: ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// CodeCast Custom Colors
				'terminal-bg': 'hsl(var(--terminal-bg))',
				'terminal-green': 'hsl(var(--terminal-green))',
				'neon-glow': 'hsl(var(--neon-glow))',
				'code-bg': 'hsl(var(--code-bg))',
				'matrix-green': 'hsl(var(--matrix-green))',
			},
			backgroundImage: {
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-dark': 'var(--gradient-dark)',
				'gradient-hero': 'var(--gradient-hero)',
			},
			boxShadow: {
				'neon': 'var(--shadow-neon)',
				'neon-strong': 'var(--shadow-neon-strong)',
			},
			textShadow: {
				'glow': 'var(--glow-text)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' },
				},
				'blink': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: 'hsl(var(--terminal-green))' },
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100vh)' },
					'100%': { transform: 'translateY(100vh)' },
				},
				'pulse-neon': {
					'0%, 100%': { boxShadow: 'var(--shadow-neon)' },
					'50%': { boxShadow: 'var(--shadow-neon-strong)' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typing': 'typing 3s steps(40, end) infinite',
				'blink': 'blink 1s step-end infinite',
				'matrix-rain': 'matrix-rain 3s linear infinite',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
			},
			transitionTimingFunction: {
				'neon': 'var(--transition-neon)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
