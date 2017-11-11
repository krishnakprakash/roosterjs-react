import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ReactEditor, createEditorViewState, Ribbon, RibbonPlugin } from '../../lib';

let container = document.getElementById('container');
let viewState = createEditorViewState('Hello ReactEditor!');
let ribbonPlugin = new RibbonPlugin();
let editor = <div>
    <Ribbon ribbonPlugin={ribbonPlugin} className={'myRibbon'} />
    <ReactEditor className={'editor'} viewState={viewState} plugins={[ribbonPlugin]} />
</div>;
window.addEventListener('resize', () => {
    ribbonPlugin.resize();
});
ReactDom.render(editor, container, null);