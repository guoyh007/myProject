
import React, { useEffect, useRef } from 'react';
import Blockly from 'blockly';
import * as Ch from 'blockly/msg/zh-hans';
// import * as Blockly_core from 'blockly/core'; zh-hans.js
import 'blockly/blocks';
import 'blockly/python';

import XmlBlockly from './blockly_xml';
// 存放的xml

export default () => {
  const blockId = useRef('blocklyDiv');// 薪酬模块

  useEffect(()=>{
    Blockly.setLocale(Ch); // 支持中文
    if(blockId.current && document.getElementById(blockId.current)){
      const workspace =  Blockly.inject('blocklyDiv',{toolbox: document.getElementById('toolbox')});
      function myUpdateFunction(event) {
        const code_js = Blockly.JavaScript.workspaceToCode(workspace);
        console.log('code_js: ', code_js);
        // const code = Blockly.Xml.workspaceToDom(workspace);
        // const code_python = Blockly.Python.workspaceToCode(workspace);
        // console.log('code_python: ', code_python);
        const xml = Blockly.Xml.workspaceToDom(workspace);
        const xml_text = Blockly.Xml.domToText(xml);
        window.localStorage.setItem('xml_text',xml_text);
      }
      workspace.addChangeListener(myUpdateFunction);

      const xml_text = window.localStorage.getItem('xml_text');
      if (xml_text) {
        const xml = Blockly.Xml.textToDom(xml_text);
        Blockly.Xml.domToWorkspace(xml, workspace);
      }
    }
  },[blockId])

  // Blockly.Blocks['lists_create_with'] = {
  //   /**
  //    * Block for creating a list with any number of elements of any type.
  //    * @this {Blockly.Block}
  //    */
  //   init: function() {
  //     this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
  //     this.setStyle('list_blocks');
  //     this.itemCount_ = 3;
  //     this.updateShape_();
  //     this.setOutput(true, 'Array');
  //     // This line is added.
  //     this.setInputsInline(true);
  //     this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
  //     this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
  //   },

  //   // etc
  // }

  return (
    <>
      <div id={blockId.current} style={{height: '715px', width: '100%', overflow: 'auto'}}></div>
      <XmlBlockly />
    </>
  )
}
// eslint-disable-next-line
