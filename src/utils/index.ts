/**
 * 创建HtmlElement
 * @param tag 标签名
 * @returns
 */
export function h(tag: string) {
  return document.createElement(tag);
}

/**
   * 通过style标签向目标DOM添加css样式
   * @param target 目标DOM
   * @param style 样式
   */
export function addStyleDom(target: HTMLElement, style: string) {
  const styleDom = h('style');
  styleDom.textContent = style;
  target.append(styleDom);
}
