const $MaterialRarity = Java.loadClass("net.minecraft.world.item.Rarity");
const materialRarity = $MaterialRarity.create("MATERIAL", Color.GREEN);

const materialItemLists = [
    {
        "modName": "create",
        "modList":
        [
            "rose_quartz"
        ]
    }
]

ItemEvents.modification(event => {
    for (var i = 0; i < materialItemLists.length; i++)
    {
        global.itemListSetRarity(event, 'MATERIAL', materialItemLists[i])
    }
});
