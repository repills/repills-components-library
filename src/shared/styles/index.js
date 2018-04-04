export const gridItem = (count, columns, gutter, buttonSpace) => `
    padding-left: ${gutter};
    padding-right: ${gutter};
    flex-basis: ${100/columns}%;
    max-width: ${100/columns}%;
    margin-bottom: ${buttonSpace};
    
    ${columns === 1 ? `
        &:last-child {
          margin-bottom: 0;
        }
      `: `
        &:nth-last-child(-n+${((count % columns) === 0) ? columns : (count % columns)}) {
          margin-bottom: 0;
        }
      `}
`;
