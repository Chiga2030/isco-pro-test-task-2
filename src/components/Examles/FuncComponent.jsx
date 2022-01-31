const FuncComponent = ({
  content,
  bigPaddig,
  background,
}) => (
  <div style={ {
    padding: bigPaddig ? '5rem' : false,
    background: background ? 'var(--color-clickable)' : false,
  } }>
    { content }
  </div>
);


export default FuncComponent;
