import { svelteDialog } from "../../libs/dialog";
import { i18n } from "../../pluginInstance";
import VipPanel from "./VipPanel.svelte";

export const showVipDialog = (plugin: any) => {
    const { component, dialog } = svelteDialog({
        title: i18n("vipDialogTitle"),
        width: "500px",
        constructor: (item) => {
            return new VipPanel({
                target: item,
                props: {
                    plugin: plugin,
                    isDialog: true
                }
            });
        }
    });
    return { component, dialog };
};
