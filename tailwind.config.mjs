/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				
				primary: '#6C6A67',
				secondary: '#66B7D9 ',
				third: '#FFFFFF',
				fourth:'#646464',
				background_primary:"#FFFFFF",
				background_secondary:"#2C4F99",
				background_third:"#5B5B5B",
				background_fourth:"#EEEEEE",
				background_fifth:"#789EEF"

			}  
			
		}, 
	},
	plugins: [],
}
