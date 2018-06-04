using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3609 - {0}")]
    public class Bridge3609
    {
        [External]
        [Constructor("{}")]
        public class Map<TValue>
        {
            [Field]
#pragma warning disable CS0114 // ���� �������� �������������� ����: ����������� �������� ����� ���������������
            public extern TValue this[string idx]
#pragma warning restore CS0114 // ���� �������� �������������� ����: ����������� �������� ����� ���������������
            {
                [Template("{this}[{idx}]")]
                get;
                [Template("{this}[{idx}] = {value}")]
                set;
            }
        }

        [Test]
        public static void TestIndexerTemplate()
        {
            var a = new Map<object>();
            a["a"] = new { a = 1, b = 2 };
            var b = a["a"];

            Assert.AreEqual(1, b["a"]);
        }
    }
}