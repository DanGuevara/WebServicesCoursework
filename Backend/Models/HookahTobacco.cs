using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CourseWork.Models
{
    public class HookahTobacco
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public Company Company { get; set; }
        public Taste[] Tastes { get; set; }
        public int Rate { get; set; }
    }
}
