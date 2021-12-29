import { Fragment } from "react";
import { TreeItem } from "./Tree-item";

import "./styles.css";

export const Tree = ({ root, children: nodes }) => {
  const handleOnClick = (event) => {
    let childrenContainer = event.target.parentNode.querySelector("ul");
    if (!childrenContainer) return; // no children

    childrenContainer.hidden = !childrenContainer.hidden;
  };

  const renderTreeStructure = (nodes) => {
    return (
      <ul className="tree" onClick={handleOnClick}>
        {nodes.map((node) => {
          if (node.children) {
            return (
              <TreeItem
                key={node.id}
                content={node.content}
                nestedChildren={node.children}
                reRenderTreeStructure={renderTreeStructure}
              />
            );
          } else {
            var listElement = <TreeItem key={node.id} content={node.content} />;
          }
          return listElement;
        })}
      </ul>
    );
  };

  return (
    <Fragment>
      <p>{root}</p>
      <div>{renderTreeStructure(nodes)}</div>
    </Fragment>
  );
};
