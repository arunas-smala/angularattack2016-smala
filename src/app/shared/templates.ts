export const getTemplate = () => localStorage.getItem('template') || `<var name="name" title="Your Name"></var>
<var-image name="photo" title="Image" value="https://bucket.mlcdn.com/a/0/227/images/5206dcee322d056da3c45d62c34d6192420b037a.jpeg/23fa7363bf6a314207ae39195a44344e2491461e.jpeg" alt="Workation in Bali"></var-image>
<var-textarea name="description" title="Description" value='We are front-end developers at MailerLite who love Angular. This time we tried to make fantastic email editor with amazing Angular2. We have created "Template language" - a set of HTML tags which brings possibility for email designers to turn any static HTML into dynamic Drag and Drop editor.'></var-textarea>

<var-color name="button_color" title="Button color" value="#00A154"></var-color>
<var-link name="button" title="Button" value="https://www.mailerlite.com" text="Visit our website"></var-link>
<var-number name="test_number" title="Number" value="5" text="Visit our website" min="3" max="30" step="5"></var-number>


<var-checkbox name="features" title="Features implemented" value="Variables" options="Variables|Blocks|Repeaters"></var-checkbox>

<var-date name="created_at" title="Template created" value="2016-12-05"></var-date>

<table width="100%" cellpadding="0" border="0" cellspacing="0">
    <tr>
        <td align="center" bgcolor="#EAECED">
            
            <table width="580" cellpadding="0" border="0" cellspacing="0" align="center" style="width: 580px;" class="none">
                <tr>
                    <td height="25"></td>
                </tr>
                <tr>
                    <td height="25"></td>
                </tr>
            </table>
            <table width="580" cellpadding="0" border="0" cellspacing="0" align="center" style="width: 580px;" class="header">
                <tr>
                    <td height="50" align="center" class="fullwidth">
                        <a href="{{variables.button.value}}" target="_blank"><img src="https://bucket.mlcdn.com/a/0/227/images/a662fdfbcfcf90a5632002612e2d1818b039e451.png/85edb8aa1b17921a8cc3fb044a7157ab74b5deac.png" height="50" class="logo" style="display: block;" border="0"></a>
                    </td>
                </tr>
            </table>
            <table width="580" cellpadding="0" border="0" cellspacing="0" align="center" style="width: 580px;" class="devicewidth">
                <tr>
                    <td height="25"></td>
                </tr>
            </table>
            <table width="580" cellpadding="0" border="0" cellspacing="0" align="center" style="min-width: 580px; width: 580px;" class="devicewidth">
                <tr>
                    <td height="25" class="none"></td>
                </tr>
            </table>
            <table width="580" cellpadding="0" border="0" cellspacing="0" align="center" style="width: 580px; border-radius:content_radius; -webkit-border-radius: 3px 3px 3px 3px; -moz-border-radius: 3px 3px 3px 3px;" bgcolor="#ffffff" class="devicewidth">
                <tr>
                    <td align="center">
                        <a href="{{variables.button.value}}" target="_blank"><img src="{{variables.photo.value}}" style="border-radius: 3px 3px 0px 0px; -webkit-border-radius: 3px 3px 0px 0px; -moz-border-radius: 3px 3px 0px 0px; display: block;" class="big-image" alt="{{variables.photo.alt}}" border="0"></a>
                    </td>
                </tr>
                <tr>
                    <td style="padding-left: 50px; padding-right: 50px;background-color:white;" class="side-padding">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="fullwidth">
                            <tr>
                                <td height="50" class="space"></td>
                            </tr>
                            <tr>
                                <td align="center" style="font-family: 'Open sans', Arial, Helvetica, sans-serif; color: #252B33; font-size: 24px; line-height: 30px; font-weight: 400;" class="bodyText">
                                    <a style="text-decoration: none; color: #252B33;" href="{{variables.button.value}}" target="_blank"><span style="color: #252B33;">Hi {{variables.name.value || 'There'}}!</span></a>
                                </td>
                            </tr>
                            <tr>
                                <td height="25"></td>
                            </tr>
                            <tr>
                                <td align="center" style="font-family: 'Open sans', Arial, Helvetica, sans-serif; color: #7E888B; font-size: 16px; line-height: 22px; text-align: center;" class="bodyText" id="content-6">
                                    <div class="text">
                                        <p style="margin-top: 0px; margin-bottom: 10px;">{{variables.description.value}}</p>
                                        <p style="margin-top: 0px; margin-bottom: 10px;">
                                            However, we had time to implement only: <strong>{{variables.features.value}}</strong>.</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td height="15" class="small-space"></td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <table cellpadding="0" border="0" cellspacing="0" class="fullwidth">
                                        <tr>
                                            <td height="50" align="center" class="fullwidth">
                                                
                                                <a href="{{variables.button.value}}" [style.background-color]="variables.button_color.value" target="_blank" class="button" style=" color: #ffffff; font-family: 'Open Sans', Arial, Helvetica, sans-serif; font-size: 16px; line-height: 30px; border-radius: 3px; text-align: center; text-decoration: none; font-weight: 400; display: block; margin: 0px 0px; padding: 10px 20px; width: 200px;">{{variables.button.text}}</a>
                                                
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td height="25"></td>
                            </tr>
                            <tr>
                                <td height="25" class="none"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <table width="580" cellpadding="0" border="0" cellspacing="0" align="center" style="min-width: 580px; width: 580px;" class="devicewidth">
                <tr>
                    <td height="25"></td>
                </tr>
            </table>
            <table width="580" cellpadding="0" border="0" cellspacing="0" align="center" style="min-width: 580px; width: 580px;" class="devicewidth">
                <tr>
                    <td height="25" class="none"></td>
                </tr>
            </table>
            <table width="580" cellpadding="0" border="0" cellspacing="0" align="center" style="width: 580px; border-radius: 3px 3px 3px 3px; -webkit-border-radius: 3px 3px 3px 3px; -moz-border-radius: 3px 3px 3px 3px;" bgcolor="#ffffff" class="devicewidth" *ngIf="variables.features.values.length">
                <tr>
                    <td style="padding-left: 50px; padding-right: 50px;background-color:white;" class="side-padding">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="fullwidth">
                            <tr>
                                <td height="25" class="space"></td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Variables') !== -1">
                                <td height="25"></td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Variables') !== -1">
                                <td align="center" style="font-family: 'Open sans', Arial, Helvetica, sans-serif; color: #252B33; font-size: 24px; line-height: 30px; font-weight: 400;" class="bodyText">
                                    Variables
                                </td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Variables') !== -1">
                                <td height="25"></td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Variables') !== -1">
                                <td align="center" style="font-family: 'Open sans', Arial, Helvetica, sans-serif; color: #7E888B; font-size: 16px; line-height: 22px; text-align: center;" class="bodyText" id="content-8">
                                    <div class="text">
                                        <p style="margin-top: 0px; margin-bottom: 10px;">
                                            Template designers can create variables with &lt;var&gt; tag. Like in all programing languages variables has types. We have implemented few of them - feel free to try them out.
                                        </p>
                                        <p>
                                            Created variables can be used anywhere. Feel free to look at our template and play with them.
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Blocks') !== -1">
                                <td height="25"></td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Blocks') !== -1">
                                <td align="center" style="font-family: 'Open sans', Arial, Helvetica, sans-serif; color: #252B33; font-size: 24px; line-height: 30px; font-weight: 400;" class="bodyText">
                                    Blocks
                                </td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Blocks') !== -1">
                                <td height="25"></td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Blocks') !== -1">
                                <td align="center" style="font-family: 'Open sans', Arial, Helvetica, sans-serif; color: #7E888B; font-size: 16px; line-height: 22px; text-align: center;" class="bodyText" id="content-8">
                                    <div class="text">
                                        <p style="margin-top: 0px; margin-bottom: 10px;">
                                            Blocks creates new scope for variables, blocks and repeaters. You can look at each block as a separate template. That makes this language completely flexible.
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Repeaters') !== -1">
                                <td height="25"></td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Repeaters') !== -1">
                                <td align="center" style="font-family: 'Open sans', Arial, Helvetica, sans-serif; color: #252B33; font-size: 24px; line-height: 30px; font-weight: 400;" class="bodyText">
                                    Repeaters
                                </td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Repeaters') !== -1">
                                <td height="25"></td>
                            </tr>
                            <tr *ngIf="variables.features.values.indexOf('Repeaters') !== -1">
                                <td align="center" style="font-family: 'Open sans', Arial, Helvetica, sans-serif; color: #7E888B; font-size: 16px; line-height: 22px; text-align: center;" class="bodyText" id="content-8">
                                    <div class="text">
                                        <p style="margin-top: 0px; margin-bottom: 10px;">
                                            Repeaters are arrays of blocks. Users are allowed to repeat predefined blocks as many times as they need.
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td height="15" class="small-space"></td>
                            </tr>
                            <tr>
                                <td height="25" class="none"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <table width="580" cellpadding="0" border="0" cellspacing="0" align="center" style="min-width: 580px; width: 580px;" class="devicewidth">
                <tr>
                    <td height="25"></td>
                </tr>
            </table>
            <table width="580" cellpadding="0" border="0" cellspacing="0" align="center" style="min-width: 580px; width: 580px;" class="devicewidth">
                <tr>
                    <td height="25" class="none"></td>
                </tr>
                <tr>
                    <td align="center">
                        <table cellpadding="0" border="0" cellspacing="0" align="center" class="devicewidth">
                            <tr>
                                <td align="center">
                                    <table cellpadding="0" border="0" cellspacing="0" align="center">
                                        <tr>
                                            <td width="15"></td>
                                            <td width="20">
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=www.mailerlite.com/" target="_blank">
                                                    <img src="https://bucket.mlcdn.com/a/0/0/templates/0/183/70c9081e07a195e6aa43d80518ab76fa064b0380.png" width="20" height="20" border="0" style="display: block;">
                                                </a>
                                            </td>
                                            <td width="10"></td>
                                            <td align="left" valign="top" style="line-height: 20px; font-family: 'Open Sans', Arial, Helvetica, sans-serif; color: #989CA5; font-size: 12px; font-weight: 400; text-transform: uppercase;" class="none">
                                                <a style="text-decoration: none; color: #989CA5;" href="https://www.facebook.com/sharer/sharer.php?u=www.mailerlite.com/" target="_blank">
                                                    <span style="color: #989CA5;">Share to Facebook</span>
                                                </a>
                                            </td>
                                            <td width="15"></td>
                                            <td width="15"></td>
                                            <td width="20">
                                                <a href="https://twitter.com/home?status= https://www.mailerlite.com/&url=https://www.mailerlite.com/" target="_blank">
                                                    <img src="https://bucket.mlcdn.com/a/0/0/templates/0/183/616249e7879e93fd777b02ead59171a47773b1d5.png" width="20" height="20" border="0" style="display: block;">
                                                </a>
                                            </td>
                                            <td width="10"></td>
                                            <td align="left" valign="top" style="line-height: 20px; font-family: 'Open Sans', Arial, Helvetica, sans-serif; color: #989CA5; font-size: 12px; font-weight: 400; text-transform: uppercase;" class="none">
                                                <a style="text-decoration: none; color: #989CA5;" href="https://twitter.com/home?status= https://www.mailerlite.com/&url=https://wwww.mailerlite.com/" target="_blank">
                                                    <span style="color: #989CA5;" class="bodyText">Share to Twitter</span>
                                                </a>
                                            </td>
                                            <td width="15"></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td height="25"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <table width="580" cellpadding="0" border="0" cellspacing="0" align="center" style="min-width: 580px; width: 580px;" class="devicewidth">
                <tr>
                    <td height="25"></td>
                </tr>
                <tr>
                    <td align="center">
                        <a href="{{variables.button.value}}" target="_blank">
                            <img src="https://bucket.mlcdn.com/a/0/227/images/a662fdfbcfcf90a5632002612e2d1818b039e451.png/85edb8aa1b17921a8cc3fb044a7157ab74b5deac.png" height="35" style="display: block;" border="0">
                        </a>
                    </td>
                </tr>
                <tr>
                    <td height="25"></td>
                </tr>
                <tr>
                    <td align="center" style="font-family:'Open Sans', Arial, Helvetica, sans-serif; color: #989CA5; font-size:12px; line-height:18px; font-weight:400; text-transform:uppercase;" class="bodyText">
                        <div class="text">Content created at: {{variables.created_at.value}}</div>
                    </td>
                </tr>
                <tr>
                    <td height="25"></td>
                </tr>
                <tr>
                    <td align="center" style="font-family:'Open Sans', Arial, Helvetica, sans-serif; color: #989CA5; font-size:12px; line-height:18px; font-weight:400;" id="content-10" class="bodyText">
                        <div class="text"></div>
                    </td>
                </tr>
                <tr>
                    <td height="15"></td>
                </tr>
            </table>
        </td>
    </tr>
</table>

<style>
    .ReadMsgBody { width: 100%; background-color: #EAECED; }
    .ExternalClass { width: 100%; background-color: #EAECED; }
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
        line-height: 110%;
    }
    .ExternalClass * {
        line-height: 110%;
    }
    body {
        margin: 0;
        padding: 0;
    }
    body, table, td, p, a, li {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    a {
        text-decoration: underline;
    }
    table td {
        border-collapse: collapse;
    }
    table {
        border-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
    }
    table, td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
    }
    @media only screen and (max-width: 600px) {
        table[class="devicewidth"],table[class="header"] { width: 90% !important; min-width: 10% !important; }
        table[class="fullwidth"] { width: 100% !important; }
        td[class="fullwidth"],td[class="slogan"] {
            min-width: 10% !important;
            height: auto !important;
        }
        table[class="header"] {
            margin-top: 25px !important;
        }
        table[class="element"],table[class="social-links"] {
            display:block !important;
            width:100% !important;
        }
        table[class="social-links"] { margin-bottom: 25px !important }
        /* Extra */
        table[class="none"],td[class="none"] { display: none !important; }
        td[class="side-padding"] {
            padding: 0 25px !important;
        }
        a[class="button"] {
            width: auto !important;
        }
        td[class="space"] {
            height: 25px !important;
        }
        td[class="small-space"] {
            height: 15px !important;
        }
        td[class="slogan"] {
            padding-top: 25px !important;
        }
        /* Images */
        img[class="big-image"] {
            width: 100% !important;
            height: auto !important;
        }
    }
</style>
<style>
    @media only screen and (max-width: 600px) {
        img[class="header-image"] {
            width: 100% !important;
            height: auto !important;
            max-width: 580px;
        }
    }
</style>
<style>
    @media only screen and (max-width: 600px) {
        img[class="logo"] {
            width: 100% !important;
            height: auto !important;
            max-width: 197px;
        }
    }
</style>
<style>
    body {
        background-color:#EAECED
    }
</style>`;
