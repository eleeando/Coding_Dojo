select country.name, language, Percentage from country 
join countrylanguage on CountryCode=code 
where Language="Slovene" order by Percentage desc;

select country.name, count(city.id) as cities from country 
join city on Code=CountryCode
group by country.name
order by cities desc;

select city.name, city.Population, code from city 
join country on Code=CountryCode
where city.population > 500000 
and country.name="Mexico"
order by city.Population desc;

select country.name, Language, Percentage from countrylanguage 
join country on Code=CountryCode
where Percentage > 98 order by Percentage desc;

select country.name, SurfaceArea, country.Population from country where SurfaceArea < 501 and country.Population > 100000;

select country.name, GovernmentForm, LifeExpectancy from country where GovernmentForm="Constitutional Monarchy" and capital >200 and lifeExpectancy >75;

select country.name, city.Name, District, city.Population from country
join city on Code=CountryCode
where District="Buenos Aires" and city.Population > 500000;

select country.Region, count(country.name) as countries from country 
group by country.Region
order by countries desc;












