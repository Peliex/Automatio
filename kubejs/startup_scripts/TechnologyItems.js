//TODO: For the love of god make a asset file for a list of items to iterate over to save this file from becoming an absolute monolith
const $Rarity = Java.loadClass("net.minecraft.world.item.Rarity");
const technologyRarity = $Rarity.create("TECHNOLOGY", Color.RED);

const createItemList = [
    "create:wrench",
    "create:copper_backtank",
    "create:netherite_backtank",
    "create:linked_controller",
    "create:potato_cannon",
    "create:extendo_grip",
    "create:wand_of_symmetry",
    "create:schematicannon",
    "create:shaft",
    "create:cogwheel",
    "create:large_cogwheel",
    "create:gearbox",
    "create:vertical_gearbox",
    "create:clutch",
    "create:gearshift",
    "create:encased_chain_drive",
    "create:adjustable_chain_gearshift",
    "create:belt_connector",
    "create:water_wheel",
    "create:large_water_wheel",
    "create:encased_fan"
]

ItemEvents.modification(event => {
    for (var i = 0; i < createItemList.length; i++)
    {
        event.modify(createItemList[i], item => {
            item.rarity = 'TECHNOLOGY';
        });
    };
});
