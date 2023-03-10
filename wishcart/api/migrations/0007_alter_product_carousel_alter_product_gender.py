# Generated by Django 4.1.3 on 2023-03-05 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_product_carousel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='carousel',
            field=models.CharField(choices=[('yes', 'yes'), ('no', 'no')], default='no', max_length=3),
        ),
        migrations.AlterField(
            model_name='product',
            name='gender',
            field=models.CharField(choices=[('M', 'M'), ('F', 'F'), ('None', 'None')], max_length=10, null=True),
        ),
    ]