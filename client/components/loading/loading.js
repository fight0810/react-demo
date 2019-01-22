import React, { SFC } from "react";
import classnames from "classnames";
import "./loading.less";

const Loading = (props) => {
  const { className, loading, loadingText } = props;
  if (!loading) return null;
  return (
    <div className={classnames("g-loading", className)}>
      <i className="icon" />
      <span className="text">{loadingText}</span>
    </div>
  );
};

Loading.defaultProps = {
  loading: true,
  loadingText: "正在加载中"
};

export default Loading;
