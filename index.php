<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toby</title>
    <link rel="stylesheet" type="text/css" href="dist/css/main.css">

    <!-- TODO add manifest here -->
    <link rel="manifest" href="/manifest.json">
    <!-- Add to home screen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Weather PWA">
    <link rel="apple-touch-icon" href="images/icons/icon-152x152.png">
    <meta name="msapplication-TileImage" content="images/icons/icon-144x144.png">
    <meta name="msapplication-TileColor" content="#2F3BA2">

    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
</head>

<div class="video">
    <video autoplay>
        <source src="images/usine.mp4" type="video/mp4">
    </video>
</div>

<audio autoplay loops>
    <source src="sf_foret-ambiance-calme-09.mp3"/>
</audio>

<body class="wrapper-sm">
    <header class="header">
        <div class="nav">
            <div class="container">
                <button type="button" data-menu="wear" class="btn-nav"><?php include('svg/icon_tee.svg'); ?></button>
                <button type="button" data-menu="food" class="btn-nav logo"><?php include('svg/icon_logo.svg'); ?></button>
                <button type="button" data-menu="toy" class="btn-nav"><?php include('svg/icon_game.svg'); ?></button>
                <button type="button" class="setting"><?php include('svg/settings.svg'); ?></button>
            </div>
        </div>
    </header>

    <main>
        <div class="flower">
            <?php include('svg/flower.svg'); ?>
        </div>

        <div class="monster">
            <div class="img-monster">
                <?php include('svg/monster.svg'); ?>
            </div>
            <div id="trash-recycle" >
                <?php include('svg/compost.svg'); ?>
            </div>
            <div id="trash-not-recycle">
                <?php include('svg/triman.svg'); ?>
            </div>
        </div>

        <div class="pop-up">
            Une pile ne peut pas être recyclée à la maison ! Elles partent dans des usines spéciales
            <button class="close-popup">x</button>
        </div>

        <div class="menu menu-wear">
            <?php $categories = json_decode(file_get_contents('./assets/data/wear-category.json'));?>
            <?php $i = 0;?>
            <?php $lastElement = count((array)$categories); ?>
            <?php foreach ($categories as $key => $category) : ?>
            <?php if ($i == 0) : ?>
            <div class="window">
                <div class="list">
                <?php endif; $i++; ?>
                        <button type="button" data-target="<?= $key ?>" class="btn-wear"><?php include($category->icon); ?></button>
                        <?php if ($i == $lastElement) : ?>
                    </div>
                </div>
            <?php endif; ?>
            <?php endforeach;?>
            <?php foreach ($categories as $key => $category) : ?>
            <div class="submenu submenu-<?= $key ?>">
                <div class="window">
                    <div class="list">
                        <?php foreach ($category->items as $item) : ?>
                            <button type="button" data-target="<?= $key?>" class="btn-item"><?php include($item->img); ?></button>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>

        <div class="btn-balle">
            <?php include('svg/balle.svg'); ?>
        </div>


        <div class="menu menu-toy">
            <div class="window">
                <div class="list">
                    <button type="button" data-target="ball" class="btn-toy"><?php include('svg/icon_ball.svg'); ?></button>
                    <button type="button" data-target="ball" class="btn-toy"><?php include('svg/icon_card.svg'); ?></button>
                    <button type="button" data-target="ball" class="btn-toy"><?php include('svg/icon_padlock.svg'); ?></button>
                    <button type="button" data-target="ball" class="btn-toy"><?php include('svg/icon_padlock.svg'); ?></button>
                    <button type="button" data-target="ball" class="btn-toy"><?php include('svg/icon_padlock.svg'); ?></button>
                </div>					
            </div>
        </div>
        <div class="menu menu-food triggered">
            <div class="window">
                <div class="list">
                    <div data-target="monstre" class="btn-food"><?php include('svg/food/boite-cereales.svg'); ?></div>
                    <div data-target="recycle" class="btn-food"><?php include('svg/food/banane.svg'); ?></div>
                    <div data-target="not-recycle" class="btn-food" draggable="true"><?php include('svg/food/piles.svg'); ?></div>
                </div>					
            </div>
        </div>
    </main>

    <footer>
    </footer>

    <script src="https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.min.js"></script>
    <script src="dist/javascript/main.js"></script>
</body>

</html>