/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Blue theme
        number: 'rgb(0, 221, 255)',
        numberBoxShadow: 'rgb(0, 190, 220)',
        operators: 'rgb(30, 144, 255)',
        operatorsBoxShadow: 'rgb(22, 104, 184)',
        clear: 'rgb(64, 224, 208)',
        clearBoxShadow: 'rgb(60, 180, 180)',
        equals: 'rgb(65, 105, 225)',
        equalsBoxShadow: 'rgb(51, 82, 176)',
        calculatorBackground: 'rgb(1, 58, 99)',
        calculatorBackgroundBoxShadow: 'rgb(1, 36, 61)',
        output: 'rgb(176, 224, 230)',
        outputBoxShadow: 'rgb(130, 166, 171)',
        outputText: '#000080',
        body: 'rgb(173, 216, 230)',
        delete: 'rgb(30, 144, 255)',
        deleteBoxShadow: 'rgb(22, 104, 184)',

        // Yellow theme
        yellowNumber: '#DAA520',
        yellowNumberBoxShadow: '#b8860b',
        yellowOperators: '#FFA500',
        yellowOperatorsBoxShadow: '#ff8c00',
        yellowClear: '#FF8C00',
        yellowClearBoxShadow: '#ff7f50',
        yellowEquals: '#FF7F50',
        yellowEqualsBoxShadow: '#ff6347',
        yellowCalculatorBackground: '#FFD700',
        yellowCalculatorBackgroundBoxShadow: '#ba9d00',
        yellowOutput: '#FFFFE0',
        yellowOutputBoxShadow: '#f0e68c',
        yellowOutputText: '#B8860B',
        yellowBody: '#FFEFD5',
        yellowDelete: '#FFA500',
        yellowDeleteBoxShadow: '#ff8c00',

        //Red theme
        redNumber: 'rgb(255, 99, 71)', 
        redNumberBoxShadow: 'rgb(220, 20, 60)', 
        redOperators: 'rgb(255, 69, 0)', 
        redOperatorsBoxShadow: 'rgb(178, 34, 34)', 
        redClear: 'rgb(255, 0, 0)', 
        redClearBoxShadow: 'rgb(200, 0, 0)', 
        redEquals: 'rgb(255, 99, 71)',
        redEqualsBoxShadow: 'rgb(128, 0, 0)',
        redCalculatorBackground: 'rgb(139, 0, 0)', 
        redCalculatorBackgroundBoxShadow: 'rgb(100, 0, 0)', 
        redOutput: 'rgb(255, 160, 122)',
        redOutputBoxShadow: 'rgb(255, 99, 71)',
        redOutputText: '#8B0000',
        redBody: '#FFB6C1',
        redDelete: 'rgb(255, 0, 0)',
        redDeleteBoxShadow: 'rgb(200, 0, 0)', 
      }
    },
  },
  plugins: [],
}