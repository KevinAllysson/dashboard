# Estrutura do Projeto Dashboard

Este projeto foi organizado para suportar dashboards interativos com componentes modulares e reutilizáveis.

## Estrutura de Pastas

```
src/
├── components/           # Componentes reutilizáveis
│   ├── dashboard/       # Componentes específicos de dashboard
│   ├── ui/             # Componentes de interface básicos
│   ├── charts/         # Componentes de gráficos
│   └── widgets/        # Widgets de dashboard
├── pages/              # Páginas da aplicação
│   └── dashboard/      # Páginas de dashboard
├── layouts/            # Layouts e estruturas de página
│   └── dashboard/      # Layouts específicos de dashboard
├── hooks/              # Custom hooks React
├── services/           # Serviços e APIs
├── types/              # Definições de tipos TypeScript
├── utils/              # Funções utilitárias
├── styles/             # Arquivos de estilo CSS
└── assets/             # Imagens, ícones e outros recursos
```

## Componentes Principais

### Dashboard
- **Dashboard.tsx**: Componente principal que gerencia widgets
- **DashboardLayout.tsx**: Layout base para dashboards
- **Widget.tsx**: Componente base para widgets

### Tipos
- **dashboard.ts**: Interfaces TypeScript para dashboards e widgets

## Como Usar

1. **Criar um novo dashboard**:
```typescript
import { Dashboard } from './components';

const myDashboard = {
  id: 'my-dashboard',
  title: 'Meu Dashboard',
  layout: 'grid',
  widgets: [...]
};
```

2. **Adicionar widgets**:
```typescript
const widget = {
  id: 'metric-1',
  title: 'Total de Vendas',
  type: 'metric',
  position: { x: 0, y: 0, width: 2, height: 1 },
  data: { value: 125000 }
};
```

3. **Tipos de Widget suportados**:
- `metric`: Métricas simples
- `chart`: Gráficos
- `table`: Tabelas
- `list`: Listas

## Layouts

- **Grid**: Layout em grade responsivo
- **Flexible**: Layout com posicionamento livre

## Próximos Passos

1. Implementar componentes de gráficos (Chart.js, Recharts)
2. Adicionar drag & drop para widgets
3. Implementar persistência de dados
4. Adicionar temas (claro/escuro)
5. Criar mais tipos de widgets 