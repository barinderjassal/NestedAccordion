export const TreeItem = ({
  content,
  reRenderTreeStructure,
  nestedChildren
}) => {
  return (
    <li>
      <span>{content}</span>
      {nestedChildren && reRenderTreeStructure(nestedChildren)}
    </li>
  );
};
