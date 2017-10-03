function clickLvl1(e) {
    $('[data-mtgclass-lvl="1"]').removeClass('active');
    $(e.target).addClass('active');
    var pos = 1 + e.target.attributes.href.value.indexOf('#');
    var choice = e.target.attributes.href.value.substring(pos);
    $('#lvl2').html('');
    $('#lvl3').html('');
    $('#lvl4').html('');
    var choices = {};
    choices.Wisdom = {
        question:'In a world of magic, you would:',
        buttons: [
            {hash:'specialize',label:'Specialize in...'},
            {hash:'magic',label:'Focus on Magic'},
            {hash:'faith',label:'Focus on Faith'}
        ]
    };
    choices.Courage = {
        question:'In a war, you\'d be a part of the:',
        buttons: [
            {hash:'army',label:'Army'},
            {hash:'rebellion',label:'Rebellion'},
            {hash:'work',label:'Work Force'}
        ]
    };
    choices.Power = {
        question:'In a battle of Vikings versus Ninjas, you would choose to be:',
        buttons: [
            {hash:'ninjas',label:'A Ninja'},
            {hash:'viking',label:'A Viking'},
            {hash:'hire',label:'For Hire'}
        ]
    };
    var view = choices[choice];
    view.lvl = 2;
    $('#lvl2').html(Mustache.render($('#questiontpl').html(), view));
    $('[data-mtgclass-lvl="2"]').on('click', clickLvl2)
}
function clickLvl2(e) {
    $('[data-mtgclass-lvl="2"]').removeClass('active');
    $(e.target).addClass('active');
    var pos = 1 + e.target.attributes.href.value.indexOf('#');
    var choice = e.target.attributes.href.value.substring(pos);
    $('#lvl3').html('');
    $('#lvl4').html('');
    var choices ={};
    choices.specialize = {
        question:'You would focus on:',
        buttons: [
            {hash:'monk',label:'Your inner self'},
            {hash:'artificer',label:'Machines'},
            {hash:'advisor',label:'Advising others'}
        ]
    };
    choices.magic = {
        question:'You would focus on:',
        buttons: [
            {hash:'wizard',label:'Mana magic'},
            {hash:'shaman',label:'Ritual magic'},
            {hash:'spellshaper',label:'One specific spell'}
        ]
    };
    choices.faith = {
        question:'You would focus on faith in:',
        buttons: [
            {hash:'coward',label:'Hiding'},
            {hash:'mystic',label:'Mana'},
            {hash:'druid',label:'Nature'},
            {hash:'cleric', label:'Magic'}
        ]
    };
    choices.army = {
        question:'You are fighting:',
        buttons: [
            {hash:'ally',label:'To improve relations'},
            {hash:'soldier',label:'For your country'},
            {hash:'flagbearer',label:'To represent your country'},
            {hash:'knight',label:'To protect the kingdom'}
        ]
    };
    choices.rebellion = {
        question:'You are fighting:',
        buttons: [
            {hash:'nomad',label:'To wander'},
            {hash:'rogue',label:'For yourself'},
            {hash:'rebel',label:'For a cause'}
        ]
    };
    choices.work = {
        question:'If you could have one of the following super powers, you would choose:',
        buttons: [
            {hash:'pilot',label:'Flight'},
            {hash:'scout',label:'Affinity with the wild'},
            {hash:'rigger',label:'Strength'}
        ]
    };
    choices.ninjas = {
        question:'Vikings attack you, you attack them:',
        buttons: [
            {hash:'samurai',label:'In an honorable showdown'},
            {hash:'ninja',label:'By sneaking upon them'},
            {hash:'archer',label:'From a distance'}
        ]
    };
    choices.viking = {
        question:'Ninjas are about to attack, you:',
        buttons: [
            {hash:'warrior',label:'Taunt them'},
            {hash:'barbarian',label:'Improvise'},
            {hash:'berserker',label:'Charge towards them'}
        ]
    };
    choices.hire = {
        question:'Your loyalty is to:',
        buttons: [
            {hash:'minion',label:'Your master'},
            {hash:'mercenary',label:'Money'},
            {hash:'pirate',label:'Yourself'},
            {hash:'assassin',label:'The kill'}
        ]
    };
    var view = choices[choice];
    view.lvl = 3;
    $('#lvl3').html(Mustache.render($('#questiontpl').html(), view));
    $('[data-mtgclass-lvl="3"]').on('click', clickLvl3)
}
function clickLvl3(e) {
    $('[data-mtgclass-lvl="3"]').removeClass('active');
    $(e.target).addClass('active');
    $('#lvl4').html('');
    var pos = 1 + e.target.attributes.href.value.indexOf('#');
    var choice = e.target.attributes.href.value.substring(pos);
    var choices = {};

    choices.monk = {
        description: 'Individuals who have devoted their lives to quiet introspection and meditation, though many monks are skilled at magic, martial arts, or both.',
        class: 'Monk'
    };
    choices.artificer = {
        description: 'Machine enthusiasts who specialize in working with artifacts.',
        class: 'Artificer'
    };
    choices.advisor = {
        description: 'Advisors are tacticians, courtiers, ministers, and others known for their wisdom.',
        class: 'Advisor'
    };
    choices.wizard = {
        description: 'Highly trained, Wizards are masters of channeling mana into powerful spells.',
        class: 'Wizard'
    };
    choices.shaman = {
        description: 'Oddballs, Shamans are protectors and spiritual leaders among the more primitive races.',
        class: 'Shaman'
    };
    choices.spellshaper = {
        description: 'Spellcasters who devote themselves to perfecting a single spell or selection of spells.',
        class: 'Spellshaper'
    };
    choices.coward = {
        description:'Those who lack courage in facing danger, difficulty, opposition or pain.',
        class:'Coward',
        fullLink: 'http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=426608'
    };
    choices.mystic = {
        description: 'Adepts at channeling mana with their faith, learned through careful meditation.',
        class: 'Mystic'
    };
    choices.druid = {
        description: 'Grand masters of magic powered by faith, and strongly tied to plants, animals, fertility, the element of earth, and the land about them.',
        class: 'Druid'
    };
    choices.cleric = {
        description: 'Exceptional spellcasters who channel the power of their faith in a cause or higher being into potent magic.',
        class: 'Cleric'
    };
    choices.ally = {
        description: 'Allies are people or creatures that have joined together in an association for mutual benefit or to achieve some common purpose.',
        class: 'Ally'
    };
    choices.soldier = {
        description: 'Normally, Soldiers are trained combatants who are part of a formal army. They are adept at fighting in concert and overwhelming the enemy.',
        class: 'Soldier'
    };
    choices.flagbearer = {
        description: 'Demonstrably, Flagbearers are soldiers or civilians who bear a standard or flag, which is used as a formal, visual symbol of a military unit on the battlefield.',
        class: 'Flagbearer'
    };
    choices.knight = {
        description: 'They\'re highly-trained combatants who are usually part of a formal army or cavalry, usually specializing in fighting on horseback with a sword or lance.',
        class: 'Knight'
    };
    choices.nomad = {
        description: 'Hermits or members from uncivilized tribes who wander open spaces in closely-knit groups.',
        class: 'Nomad'
    };
    choices.rogue = {
        description: 'Elusive, Rogues live by their wits, using stealth and cunning to make their way in life.',
        class: 'Rogue'
    };
    choices.rebel = {
        description: 'You\'re an individual who fights against oppression or just to survive.',
        class: 'Rebel'
    };
    choices.pilot = {
        description: 'Fliers of skyships, air balloons or other vehicles.',
        class: 'Pilot'
    };
    choices.scout = {
        description: 'Odd individuals who are adept at getting along in the wild, often sharing the benefits of their prowess with others.',
        class: 'Scout'
    };
    choices.rigger = {
        description: 'Riggers are creatures that specialize in the lifting and moving of extremely large or heavy objects.',
        class: 'Rigger'
    };
    choices.archer = {
        description: 'Combatants who specialize in fighting with bow and arrows.',
        class: 'Archer'
    };
    choices.samurai = {
        description: 'Elite warriors who have sworn their service and their lives to a single authority figure, usually a feudal lord.',
        class: 'Samurai'
    };
    choices.ninja = {
        description: 'Masters of both stealth and armed combat who may find employment as spies, warriors, mercenaries and assassins.',
        class: 'Ninja'
    };
    choices.warrior = {
        description:'Elite combatants who fight alone or in loose hordes.',
        class:'Warrior'
    };
    choices.barbarian = {
        description:'Tough but unorganized fighters, usually from primitive and/or uncivilized cultures.',
        class:''
    };
    choices.berserker = {
        description:'Oafish combatants who enter a frenzy in battle, gaining great speed and battle prowess.',
        class:'Berserker',
    };
    choices.minion = {
        description:'Workers of the will of overtly evil forces or organizations.',
        class:'Minion',
    };
    choices.mercenary = {
        description:'Offensive individuals who sell their services in combat for money.',
        class:'Mercenary',
    };
    choices.pirate = {
        description:'Raucous fighters and scoundrels who sail the sea and skies to loot and plunder the unexpecting.',
        class:'Pirate',
    };
    choices.assassin = {
        description:'Killing specialists, assassins do contracts just so that they have some money.',
        class:'Assassin',
    };
    var view = choices[choice];
    view.lvl = 4;
    $('#lvl4').html(Mustache.render($('#classtpl').html(), view));
}

// handlers
    $('[data-mtgclass-lvl="1"]').on('click', clickLvl1);
    $('[data-mtgclass-lvl="2"]').on('click', clickLvl2);
    $('[data-mtgclass-lvl="3"]').on('click', clickLvl3);