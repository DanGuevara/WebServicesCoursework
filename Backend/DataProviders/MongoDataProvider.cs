using CourseWork.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseWork.DataProviders
{
    public class MongoDataProvider
    {
        IMongoDatabase database; // база данных

        public MongoDataProvider()
        {
            // строка подключения
            string connectionString = "mongodb://localhost:27017/HookahMixer";
            var connection = new MongoUrlBuilder(connectionString);
            // получаем клиента для взаимодействия с базой данных
            MongoClient client = new MongoClient(connectionString);
            // получаем доступ к самой базе данных
            database = client.GetDatabase(connection.DatabaseName);
        }

        // обращаемся к коллекции HookahTobacco
        private IMongoCollection<HookahTobacco> HookahTobaccos => database.GetCollection<HookahTobacco>("HookahTobaccos");

        private IMongoCollection<Company> Companies => database.GetCollection<Company>("Companies");
        private IMongoCollection<Taste> Tastes => database.GetCollection<Taste>("Tastes");

        // получаем все документы, используя критерии фальтрации
        public async Task<IEnumerable<HookahTobacco>> GetPhones(string name, int? minPrice = 0, int? maxPrice = 0)
        {
            // строитель фильтров
            var builder = new FilterDefinitionBuilder<HookahTobacco>();
            var filter = builder.Empty; // фильтр для выборки всех документов
            // фильтр по имени
            if (!String.IsNullOrWhiteSpace(name))
            {
                filter = filter & builder.Regex("Name", new BsonRegularExpression(name));
            }
//            if (minPrice.HasValue)  // фильтр по минимальной цене
//            {
//                filter = filter & builder.Gte("Price", minPrice.Value);
//            }
//            if (maxPrice.HasValue)  // фильтр по максимальной цене
//            {
//                filter = filter & builder.Lte("Price", maxPrice.Value);
//            }

            return await HookahTobaccos.Find(filter).ToListAsync();
        }

        public async Task<IEnumerable<HookahTobacco>> GetAllTobaccos()
        {
            var builder = new FilterDefinitionBuilder<HookahTobacco>();
            var filter = builder.Empty; // фильтр для выборки всех документов
            return await HookahTobaccos.Find(filter).ToListAsync();
        }


        // получаем один документ по id
        public async Task<HookahTobacco> GetPhone(string id)
        {
            return await HookahTobaccos.Find(new BsonDocument("_id", new ObjectId(id))).FirstOrDefaultAsync();
        }
        // добавление документа
        public async Task Create(HookahTobacco p)
        {
            await HookahTobaccos.InsertOneAsync(p);
        }
        // обновление документа
        public async Task Update(HookahTobacco p)
        {
            await HookahTobaccos.ReplaceOneAsync(new BsonDocument("_id", new ObjectId(p.Id)), p);
        }
        // удаление документа
        public async Task Remove(string id)
        {
            await HookahTobaccos.DeleteOneAsync(new BsonDocument("_id", new ObjectId(id)));
        }

        public async Task<IEnumerable<Company>> GetAllCompanies()
        {
            return await this.Companies.FindAsync((Company c) => true).Result.ToListAsync();
        }

        public async Task CreateCompany(Company company)
        {
            await this.Companies.InsertOneAsync(company);
        }

        public async Task<IEnumerable<Taste>> GetAllTastes()
        {
            return await this.Tastes.FindAsync((Taste t) => true).Result.ToListAsync();
        }

        public async Task CreateTaste(Taste taste)
        {
            await this.Tastes.InsertOneAsync(taste);
        }
    }
}
