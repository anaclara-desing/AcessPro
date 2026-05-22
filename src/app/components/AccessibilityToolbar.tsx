import { Type, Plus, Minus, RotateCcw, Contrast, Volume2, VolumeX } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

export function AccessibilityToolbar() {
  const {
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    highContrast,
    toggleHighContrast,
    readAloud,
    toggleReadAloud,
  } = useAccessibility();

  return (
    <div className="fixed bottom-6 right-6 bg-card border-2 border-border rounded-lg shadow-xl p-3 z-50">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 pb-2 border-b border-border">
          <Type className="w-4 h-4" />
          <span className="text-sm font-medium">Acessibilidade</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={decreaseFontSize}
            className="p-2 rounded hover:bg-accent transition-colors"
            aria-label="Diminuir fonte"
            title="Diminuir fonte"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-xs px-2 min-w-[3rem] text-center">{fontSize}px</span>
          <button
            onClick={increaseFontSize}
            className="p-2 rounded hover:bg-accent transition-colors"
            aria-label="Aumentar fonte"
            title="Aumentar fonte"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={resetFontSize}
            className="p-2 rounded hover:bg-accent transition-colors"
            aria-label="Resetar fonte"
            title="Resetar fonte"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        <button
          onClick={toggleHighContrast}
          className={`flex items-center gap-2 p-2 rounded transition-colors ${
            highContrast ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
          }`}
          aria-label={highContrast ? 'Desativar alto contraste' : 'Ativar alto contraste'}
          title={highContrast ? 'Desativar alto contraste' : 'Ativar alto contraste'}
        >
          <Contrast className="w-4 h-4" />
          <span className="text-sm">Alto Contraste</span>
        </button>

        <button
          onClick={toggleReadAloud}
          className={`flex items-center gap-2 p-2 rounded transition-colors ${
            readAloud ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
          }`}
          aria-label={readAloud ? 'Desativar leitura' : 'Ativar leitura'}
          title={readAloud ? 'Desativar leitura' : 'Ativar leitura'}
        >
          {readAloud ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          <span className="text-sm">Leitura por Voz</span>
        </button>
      </div>
    </div>
  );
}
