export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const menus: { name: string; items: Item[] }[] = [
  {
    name: '지역별 분석',
    items: [
      {
        name: '저평가 지역',
        slug: 'layouts',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Grouped Layouts',
        slug: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Parallel Routes',
        slug: 'parallel-routes',
        description: 'Render multiple pages in the same layout',
      },
    ],
  },
  {
    name: '아파트별 분석',
    items: [
      {
        name: '시군구별 랜드마크',
        slug: 'loading',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      },
      {
        name: '개별 아파트 선택/분석',
        slug: 'error-handling',
        description: 'Create Error UI for specific parts of an app',
      },
      {
        name: '시세 트래킹',
        slug: 'not-found',
        description: 'Create Not Found UI for specific parts of an app',
      },
    ],
  },
  {
    name: '비교 아파트 찾기',
    items: [
      {
        name: '조건과 가격이 유사한 아파트(지도)',
        slug: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
      {
        name: '지역 위상을 통한 비교',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: 'Dynamic Data',
        slug: 'ssr',
        description: 'Server-render pages',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      {
        name: 'Client Context',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: '히치하이커',
    items: [
      {
        name: '공지사항',
        slug: 'hooks',
        description: 'Preview the routing hooks available in Client Components',
      },
      {
        name: '만든 사람',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
      {
        name: '사견',
        slug: 'snippets',
        description: 'A collection of useful App Router code snippets',
      },
    ],
  },
];
