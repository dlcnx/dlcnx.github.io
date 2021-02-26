function golink(){
    var version = document.getElementById("version").value;
    var system = document.forms["system"]["sys"].value;
    if (version == null || version == "" || system == null || system == "")
    {
        document.getElementById("tips").innerHTML = "错误: 未选择!"
    } 
    else
    {
        var link = "https://minecraft.azureedge.net/bin-" + system + "/bedrock-server-" + version + ".zip";
        document.getElementById("tips").innerHTML = "此版本下载链接为:"
        document.getElementById("link").innerHTML = link;
        document.getElementById("link").href = link;
        window.location.assign(link);
    }
}