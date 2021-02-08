/*
    Author: Jahongir Sobirov,
    Name: Typo.js
    License: MIT
*/
function viewTag(t_tagview){
    document.getElementsByTagName(t_tagview);
}
function viewClass(t_classview){
    document.getElementsByClassName(t_classview);
}
function viewID(t_idview){
    document.getElementById(t_idview); 
}
function text(t_text){
    document.getElementsByTagName(t_tagview).innerHTML = t_text;
    document.getElementsByClassName(t_classview).innerHTML = t_text;
    document.getElementsById(t_idview).innerHTML = t_text;
}
function color(t_color){
    document.getElementsByTagName(t_tagview).style.color = t_color;
    document.getElementsByClassName(t_classview).style.color = t_color;
    document.getElementsById(t_idview).style.color = t_color;
}
function type(t_type){
    document.getElementsByTagName(t_tagview).style.fontFamily = t_type;
    document.getElementsByClassName(t_classview).style.fontFamily = t_type;
    document.getElementsById(t_idview).style.fontFamily = t_type;
}
function shadow(t_shadow){
    document.getElementsByTagName(t_tagview).style.textShadow = t_shadow;
    document.getElementsByClassName(t_classview).style.textShadow = t_shadow;
    document.getElementsById(t_idview).innerHTML.style.textShadow = t_shadow;
}
function size(t_size){
    document.getElementsByTagName(t_tagview).style.fontSize = t_size;
    document.getElementsByClassName(t_classview).style.fontSize = t_size;
    document.getElementsById(t_idview).style.fontSize = t_size;
}
function style(t_style){
    document.getElementsByTagName(t_tagview).style.fontStyle = t_style;
    document.getElementsByClassName(t_classview).style.fontStyle = t_style;
    document.getElementsById(t_idview).style.fontStyle = t_style;
}
function variant(t_variant){
    document.getElementsByTagName(t_tagview).style.fontVariant = t_variant;
    document.getElementsByClassName(t_classview).style.fontVariant = t_variant;
    document.getElementsById(t_idview).style.fontVariant = t_variant;
}
function weight(t_weight){
    document.getElementsByTagName(t_tagview).style.fontWeight = t_weight;
    document.getElementsByClassName(t_classview).style.fontWeight = t_weight;
    document.getElementsById(t_idview).style.fontWeight = t_weight;
}
function adjust(t_sizeadjust){
    document.getElementsByTagName(t_tagview).style.fontSizeAdjust = t_sizeadjust;
    document.getElementsByClassName(t_classview).style.fontSizeAdjust = t_sizeadjust;
    document.getElementsById(t_idview).style.fontSizeAdjust = t_sizeadjust;
}
function align(t_align){
    document.getElementsByTagName(t_tagview).style.textAlign = t_align;
    document.getElementsByClassName(t_classview).style.textAlign= t_align;
    document.getElementsById(t_idview).style.textAlign = t_align;
}
function alignLast(t_alast){
    document.getElementsByTagName(t_tagview).style.textAlignLast = t_alast;
    document.getElementsByClassName(t_classview).style.textAlignLast = t_alast;
    document.getElementsById(t_idview).style.textAlignLast = t_alast;
}
function dec(t_tdecoration){
    document.getElementsByTagName(t_tagview).style.textDecoration = t_tdecoration;
    document.getElementsByClassName(t_classview).style.textDecoration = t_tdecoration;
    document.getElementsById(t_idview).style.textDecoration = t_tdecoration;
}
function decColor(t_cdecoration){
    document.getElementsByTagName(t_tagview).style.textDecorationColor = t_cdecoration;
    document.getElementsByClassName(t_classview).style.textDecorationColor = t_cdecoration;
    document.getElementsById(t_idview).style.textDecorationColor = t_cdecoration;
}
function decLine(t_dline){
    document.getElementsByTagName(t_tagview).style.textDecorationLine = t_dline;
    document.getElementsByClassName(t_classview).style.textDecorationLine = t_dline;
    document.getElementsById(t_idview).style.textDecorationLine = t_dline;
}
function decStyle(t_dstyle){
    document.getElementsByTagName(t_tagview).style.textDecorationStyle = t_dstyle;
    document.getElementsByClassName(t_classview).style.textDecorationStyle = t_dstyle;
    document.getElementsById(t_idview).style.textDecorationStyle = t_dstyle;
}
function indent(t_indent){
    document.getElementsByTagName(t_tagview).style.textIndent = t_indent;
    document.getElementsByClassName(t_classview).style.textIndent = t_indent;
    document.getElementsById(t_idview).style.textIndent = t_indent;
}
function overflow(t_of){
    document.getElementsByTagName(t_tagview).style.textOverflow = t_of;
    document.getElementsByClassName(t_classview).style.textOverflow = t_of;
    document.getElementsById(t_idview).style.textOverflow = t_of;
}
function transform(t_tf){
    document.getElementsByTagName(t_tagview).style.textTransform = t_tf;
    document.getElementsByClassName(t_classview).style.textTransform = t_tf;
    document.getElementsById(t_idview).style.textTransform = t_tf;
}
export { viewTag, viewClass, viewID, color, type, transform, dec, decLine, decStyle, decColor, align, alignLast, adjust, weight, variant, style, size, shadow, text, overflow, indent}
