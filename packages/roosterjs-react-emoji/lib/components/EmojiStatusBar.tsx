import Emoji from "../schema/Emoji";
import * as React from "react";
import * as StatusBarStyles from "./EmojiStatusBar.scss.g";
import { TooltipHost, TooltipOverflowMode } from "office-ui-fabric-react/lib/Tooltip";
import { Strings } from 'roosterjs-react-common';

// The Component props
export interface EmojiStatusBarProps {
    emoji: Emoji;
    strings: Strings;
}

export default class EmojiStatusBar extends React.Component<EmojiStatusBarProps, {}> {
    public render() {
        const { emoji, strings = {} } = this.props;

        const icon = emoji ? emoji.codePoint : ""; 
        const description = emoji ? strings[emoji.description] : "";

        return (
            <div className={StatusBarStyles.statusBar}>
                <i className={StatusBarStyles.statusBarIcon} role="presentation" aria-hidden="true">
                    {icon}
                </i>

                <div className={StatusBarStyles.statusBarDetailsContainer}>
                    <div className={StatusBarStyles.statusBarDetails} >
                        <TooltipHost content={description} overflowMode={TooltipOverflowMode.Parent}>
                            {description}
                        </TooltipHost>
                    </div>
                </div>

            </div>
        );
    }
}