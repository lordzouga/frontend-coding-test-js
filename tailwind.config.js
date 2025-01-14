module.exports = {
  content: ['./src/**/*.{js,jsx,vue}'],
  theme: {
    extend: {
        fontFamily: {
            inter: ["Inter", { fontFeatureSettings: '"cv11", "ss01"' }]
        },
        backgroundImage: {
            'pokemon-bg': "url('/src/assets/pokemon.jpeg')"
        }
    },
  },
  plugins: [],
}
