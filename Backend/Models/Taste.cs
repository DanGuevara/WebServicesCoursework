using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CourseWork.Models
{
    public class Taste
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
    }
}
