global.itemListSetRarity = (event, rarity, itemList) =>
{
    for (var i = 0; i < itemList.modList.length; i++)
    {
        var itemName = itemList.modName.concat(':', itemList.modList[i])
        event.modify(itemName, item => {
            item.rarity = rarity;
        });
    }
}
