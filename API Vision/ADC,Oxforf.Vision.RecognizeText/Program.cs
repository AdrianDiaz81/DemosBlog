
namespace ADC_Oxforf.Vision.RecognizeText
{
    using ADC.Oxford.Helper;
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.IO;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    class Program
    {
        public static string GetValidImagePathorUrl()
        {
            string imagePathorUrl = string.Empty;

            Console.Write("Please enter your image path or image url:");
            imagePathorUrl = Console.ReadLine();

            while ((!File.Exists(imagePathorUrl) && !Uri.IsWellFormedUriString(imagePathorUrl, UriKind.Absolute))
                || (Uri.IsWellFormedUriString(imagePathorUrl, UriKind.Absolute) && !imagePathorUrl.StartsWith("http", StringComparison.InvariantCultureIgnoreCase)))
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Invalid image path or url, please make sure the path exists or is well-formed.");
                Console.ResetColor();
                Console.Write("Please enter your image path or image url:");
                imagePathorUrl = Console.ReadLine();
            }

            return imagePathorUrl;
        }
        static void Main(string[] args)
        {
            string subscriptionKey = ConfigurationManager.AppSettings["subscriptionKey"];
            if (string.IsNullOrWhiteSpace(subscriptionKey))
            {
                Console.ForegroundColor = ConsoleColor.DarkGreen;
                Console.WriteLine("To play this sample, you should firstly get a subscription key and put it into the App.Config file.");
                Console.WriteLine("If you don't have one, please access");
                Console.WriteLine("http://www.projectoxford.ai/doc/general/subscription-key-mgmt");

                Console.ResetColor();
                Console.WriteLine();
                Console.WriteLine("Please enter any key......");
                Console.ReadLine();

                return;
            }

            var vision = new VisionHelper(subscriptionKey);
            string imagePathorUrl = "http://www.colins-it.co.uk/blog/wp-content/uploads/2012/08/keep-calm.jpg";
           // var imagePathorUrl = GetValidImagePathorUrl();
            vision.RecognizeText (imagePathorUrl);
            Console.ReadLine();
        }
    }
}
