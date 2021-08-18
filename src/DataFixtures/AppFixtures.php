<?php

namespace App\DataFixtures;

use App\Entity\Book;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $bookTitles = ['Le Renard et le Chat', 'Plus fort en emporte le vent', 'La nouvelle Eloise', 'Gros Blanc', 'Les dents de ta mère'];

        foreach ($bookTitles as $bookTitle)
        {
            $book = new Book();
            $book->setCreatedAt(new \DateTimeImmutable());
            $book->setUpdatedAt(new \DateTimeImmutable());
            $book->setTitle($bookTitle);
            $book->setPages(rand(200, 900));
            $book->setPublishedIn(new \DateTimeImmutable());

            $manager->persist($book);
        }
        $manager->flush();
    }
}
