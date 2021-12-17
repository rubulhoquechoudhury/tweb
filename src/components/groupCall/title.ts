/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import setInnerHTML from "../../helpers/dom/setInnerHTML";
import { GroupCall } from "../../layer";
import { GroupCallInstance } from "../../lib/appManagers/appGroupCallsManager";
import RichTextProcessor from "../../lib/richtextprocessor";
import PeerTitle from "../peerTitle";

export default class GroupCallTitleElement {
  private peerTitle: PeerTitle;

  constructor(private appendTo: HTMLElement) {
    this.peerTitle = new PeerTitle({peerId: 0});
  }

  public update(instance: GroupCallInstance) {
    const {peerTitle, appendTo} = this;
    const groupCall = instance.groupCall as GroupCall.groupCall;
    const peerId = instance.chatId.toPeerId(true);
    if(groupCall.title) {
      setInnerHTML(appendTo, RichTextProcessor.wrapEmojiText(groupCall.title));
    } else if(peerTitle.peerId !== peerId) {
      peerTitle.peerId = peerId;
      peerTitle.update();
      appendTo.append(peerTitle.element);
    }
  }
}