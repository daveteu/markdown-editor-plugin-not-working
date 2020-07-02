import React from 'react'
import ReactMarkDown from 'react-markdown'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('react-markdown-editor-lite'), {
    ssr: false
  });

const { PluginProps } = dynamic(() => import('react-markdown-editor-lite'), {
    ssr: false
 });

const MDDivider = (PluginProps) => {

    const addDivider = () => {
        props.editor.inserText('[[-]]');
    }

    return (
        <span onClick={addDivider} className="button" title="Divider"><HorizontalSplitIcon /></span>
    )
}

MDDivider.align = 'right';
MDDivider.pluginName = 'divider';

//NewApp Component
export default  (props) => {
  Editor.use(MDDivider)


return (<Editor 
        renderHTML={(text) => <ReactMarkDown source={text} />}
/>
)
}